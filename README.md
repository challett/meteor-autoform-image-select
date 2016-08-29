Autoform Selectable
===================
Better looking alternative to HTML select, checkboxes and radio button UI elements for [meteor autoform](https://github.com/aldeed/meteor-simple-schema/blob/master/README.md)

## How to install
    > meteor add muqube:autoform-selectable

## When to use autoform-selectable
AutoForm fields with `type` set to `select`, `select-multiple`, `select-radio`, `select-checkbox`, etc. are rendered by default with basic HTML elements. Use the autoform-selectable when you want a different look in your UI.

## How to use
Set the `autoform.type` as `selectable` in schema definition. Both single and multiple selections are supported. See example below.

    schema = new SimpleSchema({
        single: {
            type: String,
            label: "Single select example",
            allowedValues: [
                "opt1",
                "opt2",
                "opt3"
            ],
            autoform: {
                type: "selectable",
            }
        },
        multiple: {
            type: [String],
            label: "Multiple select example",
            allowedValues: [
                "opt1",
                "opt2",
                "opt3",
                "opt4",
                "opt5"
            ],
            autoform: {
                type: "selectable",
                multiple: true,
                max: 3,
                min: 1,
            }
        }
    });


## License

MIT
