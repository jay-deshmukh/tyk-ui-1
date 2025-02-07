Tyk-ui is our library of reusable presentational UI components. The full list of components and their documentation can be checked here:
https://tyktechnologies.github.io/tyk-ui-styleguide/

## Local setup

**Installing library with npm**

*Pre-installation steps*
Before installing the library, bear in mind that this is a private npm module, therefore in order to have access to it follow next steps:

  - Create an account on `https://www.npmjs.com/`
  - Give your username to any owner of the `tyk-ui` library, so that you can be added as a member of the project
  - Run `npm adduser` locally
  - Follow next steps

*Installation*
```javascript
npm install --save @tyk-technologies/tyk-ui
```

>Note that this is a private package so you'll need to be added as a member to the tyk-technologies org and then run `npm adduser` which will ask you for your npm credentials

**Loading tyk-ui into the project**

*Loading SASS files*
```scss
$font-path: "~@tyk-technologies/tyk-ui/lib/fonts/";
$component-images-path: "~@tyk-technologies/tyk-ui/lib/images/";
@import '~@tyk-technologies/tyk-ui/lib/sass/index';
```
*NOTE*:
For projects that don't SASS but just pure css we are also exposing the compiled styles.
```html
<link rel="stylesheet" type="text/css" href="node_modules/@tyk-technologies/tyk-ui/tyk-ui.css">
```

*Loading React components*
```javascript
import {
  Button,
  Column,
  Dropdown,
  Icon,
  InfoNote,
  Message,
  Modal,
  Panel,
  Row
} from '@tyk-technologies/tyk-ui';
```

*Note*: for the projects that don't have React this is not usable, and we can use just the styling.

## Build tyk-ui project
Contributions to the current library are welcome, so please follow these steps each time you want to make a change:

  - Create a GH issue, describing the necessary change
  - Raise a PR with the change

  *In order to publish the changes, please do the following*
  - After PR merge, run `npm run build-prod` which generates prod code of the library
  - Increase the library version in `package.json`
  - Run `npm i` to regenerate the `package-lock.json` file
  - Commit and Push changes
  - Run `npm publish`
