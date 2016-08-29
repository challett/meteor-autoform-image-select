export const name = 'challett:autoform-image-select';

AutoForm.addInputType("image-select", {
    template: "afImageSelect",
    valueOut: function() {
        const data = this.data();
        let selection = this.find('.selected.image-select-option');

        if (data.multiple) {
            let values = [];
            selection.each((index, elem) => {
                values.push($(elem).data('value'));
            });
            return values;
        } else {
            return selection.data('value');
        }
    }
});

Template.afImageSelect.helpers({
    atts: function () {
        var data = Template.currentData();
        var atts = data.atts;
        atts["data-multiple"] = data.atts["multiple"];
        atts["data-schema-key"] = data.atts["data-schema-key"];

        return atts;
    },
    isOptionSelected (option) {
        const value = Template.currentData().value;
        let isSelected = false;

        if (Array.isArray(value)) {
            isSelected = value.indexOf(option) != -1;
        } else {
            isSelected = option === value;
        }

        return (isSelected) ? "selected" : "" ;
    },
    options() {
        var data = Template.currentData();
        return data.selectOptions;
    }
});

Template.afImageSelect.events({
    'click .image-select-option'(e, t) {
        const target = $(e.currentTarget),
            isMultiple = t && t.data && t.data.atts && t.data.atts.multiple,
            isSelected = target.hasClass('selected'),
            numSelected = t.findAll('.selected.image-select-option').length,
            min = t.data.atts.min || Number.MIN_SAFE_INTEGER,
            max = t.data.atts.max || Number.MAX_SAFE_INTEGER;
        
        if (isMultiple){ 
            if ( ((min < numSelected) && isSelected) || ((numSelected < max) && !isSelected) ) {
                target.toggleClass('selected');
                target.children(".top-right").toggle();
            }
        } else {
            target.toggleClass('selected');
            target.children(".top-right").toggle();
            target.siblings(".selected").children('.top-right').toggle()
            target.siblings().removeClass('selected');
        }
        // A hack to let autoform know that the value here has changed for reactivity..
        target.val(target.hasClass('selected') + target.data().value);
        target.change();
    }
});