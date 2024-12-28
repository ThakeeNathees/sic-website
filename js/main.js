
// Convinent functions to select elements from the document.
var $ = document.querySelector.bind(document);

const { createApp } = Vue;

const app = createApp({

    // ------------------------------------------------------------------------
    // Data
    // ------------------------------------------------------------------------

    data() {
        return {
            foo: "bar",
            board_members: BOARD_MEMBERS,
            events: EVENTS,
        };
    },

    // ------------------------------------------------------------------------
    // Methods.
    // ------------------------------------------------------------------------

    methods: {
        openLink(link = null) {
            if (link === null) link = "https://www.instagram.com/socialimpact_curtin/";
            window.open(link, "_blank");
        },
    },


    mounted : function() {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 30) {
            $(".header").classList.add("stick");
            } else {
            $(".header").classList.remove("stick");
            }
        })
    },

});

app.mount('#app');
