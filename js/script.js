$(document).ready(function(){
  var navCheckbox = $('#checkbox-nav');
  var saveCheckbox = $('.article-save') || $('.saveT');
  const isChecked = this.checked;
	$(saveCheckbox).change(function save(){
    let uncheckedIcon = 'https://uploads-ssl.webflow.com/6059475c6bc6f10900dfad0b/605948e14e751c281b184d76_bookmark-thin.svg';
    let checkedIcon = 'https://uploads-ssl.webflow.com/6059475c6bc6f10900dfad0b/605948e12564f58466cea791_bookmark-thin-orange.svg';
    let iconElem = this.nextElementSibling;
    var bookmark = (isChecked == true) ? checkedIcon : uncheckedIcon;
 	  $(iconElem).attr('src',bookmark);
  });
  $('.onb-checkbox').change(function box0() {
    let wrapperBox = this.parent();
    let addActive = wrapperBox.addClass('active0');
    let removeActive = wrapperBox.removeClass('active0');
    let style = (isChecked == true) ? addActive : removeClass;
    return style;
  });
  $(navCheckbox).change(function openNav(){
    let desktopNav = $('#menu-dropdown');
    let visibility = (isChecked == true) ? show() : hide();
    $(desktopNav).visibility;
  };
});
