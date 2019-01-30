const MdToHtmlAction = require( './book-builder/actions/md-to-html-action' );
const CreateBookContentsInfoAction = require( './book-builder/actions/create-book-contents-info-action' );


const build = async () => {
    await MdToHtmlAction.action();
    await CreateBookContentsInfoAction.action();
};


module.exports = { build };