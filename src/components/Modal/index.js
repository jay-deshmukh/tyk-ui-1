import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import { ModalContext } from './modal-context';
import ModalFooter from './js/ModalFooter';
import ModalBody from './js/ModalBody';
import ModalHeader from './js/ModalHeader';
import ModalTitle from './js/ModalTitle';
/**
 * Modals add dialogs confirmation boxes, notifications, or completely custom content
 * - only one Modal can be opened at a time
 * - are unmounted when Modal is closed
 */

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.node,
      PropTypes.string,
    ]),
    /** If set on true, the Modal won't close when clicking on the overlay or by pressing ESC key */
    disableCloseCommands: PropTypes.bool,
    /** If true the Modal will be by default opened */
    opened: PropTypes.bool,
    /** Callback method when the Modal is closed */
    onClose: PropTypes.func,
    /** Width of the Moda: md or lg */
    size: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  getBackdropCssClasses() {
    const { opened } = this.props;
    const cssClasses = ['tyk-modal__backdrop'];

    if (opened) {
      cssClasses.push('opened');
    }

    return cssClasses.join(' ');
  }

  getCssClasses() {
    const { opened } = this.props;
    const cssClasses = ['tyk-modal'];

    if (opened) {
      cssClasses.push('opened');
    }

    return cssClasses.join(' ');
  }

  getModalSize() {
    const { size } = this.props;

    return `tyk-modal--${size || 'md'}`;
  }

  closeModal() {
    const { onClose } = this.props;

    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  }

  render() {
    const {
      children, disableCloseCommands, opened, onClose, size, ...restProps
    } = this.props;

    return (
      <Fragment>
        {
          ReactDOM.createPortal(
            <CSSTransition
              in={opened}
              timeout={100}
              classNames="appear"
            >
              <div className={this.getCssClasses()} {...restProps}>
                <div className={`tyk-modal__dialog ${this.getModalSize()}`}>
                  <div className="tyk-modal__content">
                    <ModalContext.Provider
                      value={{
                        opened,
                        closeModal: this.closeModal,
                      }}
                    >
                      { children }
                    </ModalContext.Provider>
                  </div>
                </div>
              </div>
            </CSSTransition>,
            document.querySelector('body'),
          )
        }
        {
          ReactDOM.createPortal(
            <CSSTransition
              in={opened}
              timeout={100}
              classNames="fade"
            >
              <button
                className={this.getBackdropCssClasses()}
                onClick={!disableCloseCommands && this.closeModal}
                onKeyDown={() => {}}
                type="button"
              />
            </CSSTransition>,
            document.querySelector('body'),
          )
        }
      </Fragment>
    );
  }
}

export { ModalContext };


Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
