---
id: components
title: Components
sidebar_label: Components
---

The Component is a base class for covering reusable utility UI items. It might be something simple and atomic like an image or a text box, but also complex structures, more probably composed by other components, like Navigator or Screen.

## Concept

A Component should obey some rules for clean and expandable project.

- Should be reusable.
- Should connect Event-Listen-Network or Command-Manager.
- Shoould have readable template.
- Should compile with `@babel/plugin-transform-react-jsx` or another alternative for better rendering performance.
- Should have cutomizable structure.

## Structure

```js
// your app
let app = Kapseli.init({
  //...
});

class MyComponent extends app.Component {
  // ...
}

app.View.addComponent("MY-COMPONENT", MyComponent);
```

## Example

**JavaScript**

```js
class Alert extends Component {
  constructor({ variant }) {
    super({
      template: (
        <div className={"alert alert-" + variant}>
          <slot></slot>
        </div>
      ),
      // if you dont compile template you can use it as a template literal.

      template: `
        <div class="alert alert-${variant}">
          <slot></slot>
        </div>
      `,
    });
  }
}

app.View.addComponent("ALERT", Alert);
```

:::tip

Templates should be compiled with `@babel/plugin-transform-react-jsx` or another alternative. This process most recommended for complex applications.

:::

**HTML**

```html
<Alert variant="danger">This is a danger alert!</Alert>
<Alert variant="info">This is a info alert!</Alert>
<Alert variant="success">This is a success alert!</Alert>
<Alert variant="warning">This is a warning alert!</Alert>
```

**Result**

![alert-component-result](/img/docs/alert-component-result.png)
