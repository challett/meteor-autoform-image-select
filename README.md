Autoform Image Select
===================
Image grid with select functionality for [meteor autoform](https://github.com/aldeed/meteor-simple-schema/blob/master/README.md)

## How to install
    > meteor add challett:autoform-image-select
    
## How to use
Provide an array of objects containing `value` and `url`.  

Provide schema options as follows configured to your needs


    autoform: {
            type: "image-select",
            afFieldInput: {
                multiple: true
            }
        },
        minCount: 1,
        maxCount: 3


## License

MIT
