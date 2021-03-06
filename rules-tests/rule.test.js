load("init.js");


testSpec("squared.gspec", [], function (spec) {
    assertSpec(spec).hasRuleSection("icon-* should be squared", {
        "icon-1": ["width 100% of icon-1/height"],
        "icon-2": ["width 100% of icon-2/height"]
    })
    .hasRuleSection("icon-* should be almost squared", {
        "icon-1": ["width 90 to 110% of icon-1/height"],
        "icon-2": ["width 90 to 110% of icon-2/height"]
    })
    .hasObjectWithSpecGroups("icon-1", {
        "squared with ~ 50px size": [
            "width ~ 50px",
            "height ~ 50px"
        ]
    })
    .hasObjectWithSpecGroups("icon-2", {
        "squared": ["width 100% of icon-2/height"]
    })
    .hasObjectWithSpecGroups("icon-3", {
        "almost squared": ["width 90 to 110% of icon-3/height"]
    })
    .hasRuleSection("icon-* should be squared with 23 to 30 px size", {
        "icon-1": ["width 23 to 30 px", "height 23 to 30 px"],
        "icon-2": ["width 23 to 30 px", "height 23 to 30 px"]
    });
});


testSpec("ratio.gspec", [], function (spec) {
    assertSpec(spec).hasRuleSection("icon-* should have ~ 33% width/height ratio", {
        "icon-1": ["height ~ 33 % of icon-1/width"],
        "icon-2": ["height ~ 33 % of icon-2/width"]
    })
    .hasObjectWithSpecGroups("icon-3", {
        "has 10% width/height ratio": ["height 10 % of icon-3/width"]
    });
});


testSpec("amount.gspec", [], function (spec) {
    assertSpec(spec)
    .hasRuleSection("amount of visible icon-* should be 2", {
        "global": ["count visible \"icon-*\" is 2"],
    })
    .hasRuleSection("amount of absent logo-* should be < 2", {
        "global": ["count absent \"logo-*\" is < 2"],
    });
});



testSpec("tags.gspec", ["desktop"], function (spec) {
    assertSpec(spec)
    .hasRuleSection("login_button, cancel_button should be visible on desktop, tablet but absent on mobile", {
        "login_button": ["visible"],
        "cancel_button": ["visible"]
    })
    .hasRuleSection("login_button should be absent on mobile but on desktop, tablet:", {
        "login_button": ["inside screen 0px top left"]
    })
});
testSpec("tags.gspec", ["tablet"], function (spec) {
    assertSpec(spec)
    .hasRuleSection("login_button, cancel_button should be visible on desktop, tablet but absent on mobile", {
        "login_button": ["visible"],
        "cancel_button": ["visible"]
    })
    .hasRuleSection("login_button should be absent on mobile but on desktop, tablet:", {
        "login_button": ["inside screen 0px top left"]
    })
});
testSpec("tags.gspec", ["mobile"], function (spec) {
    assertSpec(spec)
    .hasRuleSection("login_button, cancel_button should be visible on desktop, tablet but absent on mobile", {
        "login_button": ["absent"],
        "cancel_button": ["absent"]
    })
    .hasRuleSection("login_button should be absent on mobile but on desktop, tablet:", {
        "login_button": ["absent"]
    })
});



