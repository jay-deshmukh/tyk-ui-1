```js { "props": { "className": "checks" } }
import { useRef } from 'react';
const initialState = {
  isOpened: false,
  size: 'auto',
  offset: 0,
  forceDisplay: 'auto',
  displayAxis: 'vertical'
};
const el = useRef(null);
const updateState = newState => setState({...newState, isOpened: false});
const updateStateProp = prop => e => updateState({[prop]: e.target.value});
const onSizeChange = updateStateProp('size');
const onForceDisplayChange = updateStateProp('forceDisplay');
const onAxisChange = updateStateProp('displayAxis');

<div
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '100px'
  }}
>
  <div>
    <label>Size:</label>
    <label><input type="radio" name="size" value="auto" checked={state.size === 'auto'} onChange={onSizeChange} />auto</label>
    <label><input type="radio" name="size" value="matchElement" checked={state.size === 'matchElement'} onChange={onSizeChange} />matchElement</label>
  </div>
  <div>
    <label>Offset:<input type="number" value={state.offset} onChange={e => updateState({offset: Number(e.target.value)})} /></label>
  </div>
  <div>
    <label>Force display:</label>
    <label><input type="radio" name="forceDisplay" value="auto" checked={state.forceDisplay === 'auto'} onChange={onForceDisplayChange} />auto</label>
    <label><input type="radio" name="forceDisplay" value="top" checked={state.forceDisplay === 'top'} onChange={onForceDisplayChange} />top</label>
    <label><input type="radio" name="forceDisplay" value="bottom" checked={state.forceDisplay === 'bottom'} onChange={onForceDisplayChange} />bottom</label>
    <label><input type="radio" name="forceDisplay" value="left" checked={state.forceDisplay === 'left'} onChange={onForceDisplayChange} />left</label>
    <label><input type="radio" name="forceDisplay" value="right" checked={state.forceDisplay === 'right'} onChange={onForceDisplayChange} />right</label>
  </div>
  <div>
    <label>Display axis:</label>
    <label><input type="radio" name="displayAxis" value="vertical" disabled={state.forceDisplay !== 'auto'} checked={state.displayAxis === 'vertical'} onChange={onAxisChange} />vertical</label>
    <label><input type="radio" name="displayAxis" value="horizontal" disabled={state.forceDisplay !== 'auto'} checked={state.displayAxis === 'horizontal'} onChange={onAxisChange} />horizontal</label>
  </div>
  <div
    ref={el}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '400px',
      height: '200px',
      backgroundColor: 'orange'
    }}
  >
    <button onClick={() => setState({ isOpened: !state.isOpened })}>{state.isOpened ? 'Close' : 'Open'}</button>
  </div>
  {state.isOpened && (
    <FloatingContainer
      element={el}
      size={state.size}
      offset={state.offset}
      forceDisplay={state.forceDisplay}
      displayAxis={state.displayAxis}
    >
      <div
        style={{
          backgroundColor: 'pink',
          padding: '20px',
          height: '100%'
        }}
      >
        the content of the floating container (everything pink)
      </div>
    </FloatingContainer>
  )}
</div>
```