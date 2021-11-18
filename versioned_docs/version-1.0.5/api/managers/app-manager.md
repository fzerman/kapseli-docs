---
id: app-manager
title: App Manager
sidebar_title: App Manager
---

## Events

- `app:init` => Fires after running `init()` function.
- `app:render` => Fires after running `render()` function.
- `app:refresh` => Fires after running `refresh()` function.
- `app:locale` => Fires after running `setLocale()` function. Pass locale code as a parameter.

## Functions

#### init(config)

Parameter config as `Object`.

It is initialized your Kapseli application.

Returns an Kapseli Object.

#### store(data)

Parameter data as `Object`.

It is sent data to your current storage in JSON format.

Returns anything.

#### load(data)

Parameter data as `Object`.

It is got data to your current storage in JSON format.

Returns anything.

#### render()

Parameter anything.

It is rendered and run all application constructions.

Returns anything.

#### refresh(config)

Parameter config as `Object`.

It is re-init and re-rendered your Kapseli application.

Returns anything.

#### on(event,cb)

Parameters

- event as `String`
- cb as `Function`

It is connected your function to event.

Returns anything.

#### once(event,cb)

Parameters

- event as `String`
- cb as `Function`

It is connected your function to event. However, it is removed your function after the running.

Returns anything.

#### off(event)

Parameter event as `String`

It is unregistered event. However, you shouldn't unregister built-in events. This action some error with running other plugins.

Returns anything.

#### setLocale(locale_key)

Parameter locale_key as `String`

It is setted locale language. If you have I18n messages, Kapseli will translate them.

Returns anything.

## Modules

- Command
- $components
- Event
- plugins
- routeManager
- storageManager
- viewManager
- i18n
