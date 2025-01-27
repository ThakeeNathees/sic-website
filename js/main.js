
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

            // TODO: Get from data.js
            stat_destinations: 134,
            stat_sponsors: 9,
            stat_goals: 10,
            stat_country: 4,

            stat_curr_destinations: 0,
            stat_curr_sponsors: 0,
            stat_curr_goals: 0,
            stat_curr_country: 0,
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
        });

        let statsElem = $("#stats");
        this.animated = false;
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                console.log("here");
                if (this.animated) return;
                this.animated = true;
                const anim_ms = 10;
                for (let stat of ["destinations", "sponsors", "goals", "country"]) {
                    const interval = setInterval(() => {
                        if (this[`stat_curr_${stat}`] < this[`stat_${stat}`]) {
                            this[`stat_curr_${stat}`] += Math.ceil(this[`stat_${stat}`]/100);
                        } else {
                            clearInterval(interval);
                            if (stat === "sponsors") { this[`stat_curr_${stat}`] += '+'; }
                        }
                    }, anim_ms);
                }
            }
        }, {threshold: 0.5});
        observer.observe(statsElem);

    },

});

app.mount('#app');
