function toggleCategory(id) {

    // bütün başlıqları gizlət
    document.querySelectorAll('.menu h2').forEach(function(title) {
        title.style.display = 'none';
    });

    // bütün məhsulları gizlət
    document.querySelectorAll('.menu .item').forEach(function(item) {
        item.style.display = 'none';
    });

    // seçilən kateqoriyanı tap
    let category = document.getElementById(id);

    if (category) {

        category.style.display = 'block';

        let next = category.nextElementSibling;

        while (next && next.tagName !== 'H2') {
            next.style.display = 'flex';
            next = next.nextElementSibling;
        }
    }
}

// səhifə açılanda heç nə görünməsin
window.onload = function() {

    document.querySelectorAll('.menu h2').forEach(function(title) {
        title.style.display = 'none';
    });

    document.querySelectorAll('.menu .item').forEach(function(item) {
        item.style.display = 'none';
    });

}