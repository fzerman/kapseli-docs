---
slug: new-type-components-1-0-6
title: New Type Components
author: Furkan Zerman
author_title: Software Engineer @ Stingy Developer
author_url: https://github.com/Swindler36
author_image_url: https://avatars.githubusercontent.com/u/59289764?s=400&u=1e9e02079f7b40da793d1ac84b0fe22660cd9bd2&v=4
tags: [new, component-type, pre-alpha, component]
---

Hello everyone, today I am glad to introduce our **new class-based components**. These components are more flexible and more performance together.

Lets' get started!

**Old type class-based components** provide a connection among the same type components. Therefore, when you changed the data of one of them, others also changed their data and re-render their templates. This situation causes **the loss of performance and the loss of the reusability** of components.

**Old type class-based components**

```js
class Alert extends Component {
  constructor() {
    super({
      data: {
        type: "alert-danger",
      },
      template: (
        <div class="alert" className="type" role="alert">
          <slot></slot>
        </div>
      ),
      methods: {},
      props: {
        type: {},
      },
    });
  }
}
```

New type class-based components are individual. On the other hand, they render from the same component template, but the construction of the component will be during the rendering process. Therefore, their data are separated, and their reusability is increasing.

**New type class-based components**

```js
class FloatPanel extends Component {
  constructor(location = "start", id, title) {
    super({
      data: {
        location: "panel panel-" + location,
      },
      template: (
        <div bind-class="location" tabindex="-1" id={id}>
          <div class="panel-header">
            <h5 class="panel-title">{title}</h5>
            <button
              type="button"
              class="btn-close text-reset"
              aria-label="Close"
              onclick="panel_hide"
            ></button>
          </div>
          <div class="panel-body small">
            <slot></slot>
          </div>
        </div>
      ),
      methods: {
        panel_hide: () => this.$options.hide(),
      },
      mounted: () => {
        this.$options = new Offcanvas(document.getElementById(id));
      },
    });
  }
}
```

Also, this update becomes a new mystery feature (_whispers **multiple inheritance and extension**_). For new details follow this blog.
