---
id: panel-manager
title: Panel Manager
sidebar_title: Panel Manager
---

Panel Manager provides an API to create custom panels in two types on your app. There are two panel types such as float, static.

## Events {#events}
* `panel:{panelID}:show` => Fires when panel show()
* `panel:{panelID}:hide` => Fires when panel hide()
* `panel:{panelID}:show:before` => Fires before panel show()
* `panel:{panelID}:hide:before` => Fires before panel hide()
* `panel:{panelID}:show:after` => Fires after panel show()
* `panel:{panelID}:hide:after` => Fires after panel hide()

## Functions {#functions}

* show(panelID)
* hide(panelID)
* isFloatPanel(panelID)
* isShow(panelID)
* render(panelID)
* setView(panelID,view)
* add(panelID,view,config)
* get(panelID)
* getAll
* setConfig(panelID,config)

## Panels {#panels}

ID|Name|Type
---|---|---
`left-side`|Left Sidebar| Static
`right-side`|Right Sidebar| Static
`left-pan`|Left Panel| Float
`right-pan`|Right Panel| Float
`nav`|Navbar|Static
`status`|Status Panel| Static
`bot-pan`|Bottom Panel| Float

## Panel Configs {#panel-configs}


Config|Default|Purpose
---|---|---
scrollable|true|Puts `overflow-y:scroll`
