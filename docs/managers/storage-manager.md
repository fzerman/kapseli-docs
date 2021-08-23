# Storage Manager
Storage Manager provides you the capability to manage multiple databases and ‘load’ and ‘store’ data with databases.

## Events
* `storage:start` - Before the storage request is started
* `storage:start:store` - Before the store request. The object to store is passed as an argumnet (which you can edit)
* `storage:start:load` - Before the load request. Items to load are passed as an argumnet (which you can edit)
* `storage:load` - Triggered when something was loaded from the storage, loaded object passed as an argumnet
* `storage:store` - Triggered when something is stored to the storage, stored object passed as an argumnet
* `storage:end` - After the storage request is ended
* `storage:end:store` - After the store request
* `storage:end:load` - After the load request
* `storage:error` - On any error on storage request, passes the error as an argument
* `storage:error:store` - Error on store request, passes the error as an argument
* `storage:error:load` - Error on load request, passes the error as an argument

## Functions
* getConfig()
* add(label,config)
* get(label)
* getStorages()
* getCurrent()
* setCurrent(label)
* store(data)
* load(data_label)
