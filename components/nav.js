/**
 * AVCSSA 2026 — shared navigation component.
 * Usage: place <div id="site-nav"></div> where the nav should appear,
 * then load this script before flowbite.min.js.
 *
 * To add / rename / reorder nav items, edit NAV_ITEMS below.
 */
(function () {
    var NAV_ITEMS = [
        { label: 'Home',             href: '/' },
        { label: 'Important Dates',  href: '/page/important-dates.html' },
        { label: 'Submission',       href: '/page/submission.html' },
        { label: 'Themes',           href: '/page/themes.html' },
        { label: 'Committee', href: '/page/organisation.html' },
        { label: 'Sponsors',  href: '/page/sponsors.html' },
        {
            label: 'ATTEND',
            dropdown: [
                { label: 'Registration', href: '/page/registration.html' },
                { label: 'Program',      href: '/page/program.html' },
                { label: 'Local Info',   href: '/page/venue.html' },
            ]
        },
    ];

    /* ── helpers ─────────────────────────────────────────────────────────── */

    function isActive(href) {
        var path = window.location.pathname;
        if (href === '/') return path === '/' || path === '/index.html';
        return path === href || path.endsWith(href);
    }

    function dropdownHasActive(items) {
        return items.some(function (i) { return isActive(i.href); });
    }

    /* ── desktop nav ─────────────────────────────────────────────────────── */

    function desktopItem(item, idx) {
        var ml = idx === 0 ? '' : ' ml-1';

        if (item.dropdown) {
            var active     = dropdownHasActive(item.dropdown);
            var colorStyle = active ? ' style="color:#0D9488"' : '';
            var hoverCls   = active ? '' : ' hover:text-teal-600';
            var ddId       = 'dd-attend';
            var btnId      = 'btn-dd-attend';

            var subItems = item.dropdown.map(function (sub) {
                var subActive = isActive(sub.href);
                return '<li>' +
                    '<a href="' + sub.href + '" class="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-teal-700' +
                    (subActive ? ' font-bold" style="color:#0D9488"' : '"') +
                    '>' + sub.label + '</a>' +
                    '</li>';
            }).join('');

            return '<li class="relative text-sm font-bold uppercase tracking-wider duration-100' + hoverCls + ml + '"' + colorStyle + '>' +
                '<button id="' + btnId + '" data-dropdown-toggle="' + ddId + '"' +
                ' class="flex items-center gap-0.5 pl-1 pr-1 lg:pl-2 lg:pr-2 py-2 cursor-pointer">' +
                item.label +
                '<svg class="w-3 h-3 ml-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>' +
                '</svg>' +
                '</button>' +
                '<div id="' + ddId + '" class="z-50 hidden bg-white rounded-lg shadow-lg border border-gray-100" style="min-width:160px">' +
                '<ul class="py-1">' + subItems + '</ul>' +
                '</div>' +
                '</li>';
        }

        var active = isActive(item.href);
        if (active) {
            return '<li class="text-sm font-bold uppercase tracking-wider duration-100' + ml + '" style="color:#0D9488">' +
                '<a class="pl-1 pr-1 lg:pl-2 lg:pr-2 py-2 border-b-2" style="border-color:#0D9488" href="' + item.href + '">' + item.label + '</a>' +
                '</li>';
        }
        return '<li class="text-sm font-bold uppercase tracking-wider hover:text-teal-600 duration-100' + ml + '">' +
            '<a class="pl-1 pr-1 lg:pl-2 lg:pr-2 py-2" href="' + item.href + '">' + item.label + '</a>' +
            '</li>';
    }

    /* ── mobile nav ──────────────────────────────────────────────────────── */

    function mobileItem(item) {
        if (item.dropdown) {
            var header = '<li class="text-xs w-full font-bold uppercase tracking-widest px-6 pt-4 pb-1" style="color:#6EE7B7;opacity:0.7">' +
                item.label + '</li>';
            var subItems = item.dropdown.map(function (sub) {
                return '<li class="text-sm w-full font-bold uppercase tracking-wider text-gray-100">' +
                    '<a class="py-2 block px-8 w-full" href="' + sub.href + '">' + sub.label + '</a>' +
                    '</li>';
            }).join('');
            return header + subItems;
        }
        return '<li class="text-sm w-full font-bold uppercase tracking-wider text-gray-100">' +
            '<a class="py-2 block px-6 w-full" href="' + item.href + '">' + item.label + '</a>' +
            '</li>';
    }

    /* ── render ──────────────────────────────────────────────────────────── */

    var placeholder = document.getElementById('site-nav');
    if (!placeholder) return;

    var desktopLis = NAV_ITEMS.map(desktopItem).join('');
    var mobileLis  = NAV_ITEMS.map(mobileItem).join('');

    placeholder.outerHTML =
        '<nav class="h-[4em] hidden lg:flex items-center justify-end w-full text-gray-900">' +
        '<ul class="flex justify-center h-full items-center flex-wrap">' + desktopLis + '</ul>' +
        '</nav>' +
        '<nav class="h-[4em] flex lg:hidden" style="z-index:9999">' +
        '<button data-collapse-toggle="mobile-menu" aria-controls="mobile-menu" aria-expanded="false">' +
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 m-auto cursor-pointer" style="color:#6EE7B7">' +
        '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />' +
        '</svg>' +
        '</button>' +
        '<div class="hidden absolute top-14 left-0 z-10 w-full pb-4" style="background:#134E4A" id="mobile-menu">' +
        '<ul class="py-5">' + mobileLis + '</ul>' +
        '</div>' +
        '</nav>';
})();
