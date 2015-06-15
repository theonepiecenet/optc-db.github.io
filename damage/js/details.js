(function() {

var target = null;
var detailsVisible = null;
var zIndex = 1;

var timeout = null;

var currentModifiers = [ null, null, null, null, null, null ];
var modifiers = [ 'Miss', 'Good', 'Great', 'Perfect' ];

/* * * * * UI callbacks * * * * */

var onDamageClick = function(e) {
    target = $(this);
    if (!target.hasClass('details')) {
        target[0].style.zIndex = ++zIndex;
        detailsVisible = target.find('[id]').attr('id');
        timeout = setTimeout(function() {
            $(document).trigger('detailsRequested',detailsVisible);
        },500);
        target.toggleClass('details');
    } else {
        var parent = e.target.parentNode;
        if (e.which != 2 || parent.className != 'turnContainer') {
            if (timeout !== null) clearTimeout(timeout);
            detailsVisible = null;
            target.find('.detailsContainer').remove();
            var temp = target[0];
            target.toggleClass('details');
        } else if (e.which == 2 && parent.className == 'turnContainer') {
            var index = $(parent).index() / 2;
            currentModifiers[index] = modifiers[(modifiers.indexOf(currentModifiers[index])+1)%4];
            $(document).trigger('customModifiers',[ currentModifiers ]);
        }
    }
};

var getTypeOfHit = function(position,currentMultiplier,nextMultiplier) {
    var difference = Math.round((nextMultiplier - currentMultiplier) * 100) / 100; // js being js
    if (position == 5 || difference == 0.3) return 'Perfect';
    if (difference == 0.1) return 'Great';
    if (currentMultiplier > nextMultiplier) return 'Miss';
    return 'Miss or Good';
};

var formatNumber = function(n) {
    var rev = function(x) { return x.split('').reverse().join(''); };
    return rev(rev(''+n).replace(/(\d{3,3})/g,'$1,')).replace(/^,|,$/g,'');
};

var appendElements = function(target,turn,damageDealer,type,damage,multiplier) {
    var container = $('<div class="turnContainer"></div>');
    target.append(container);
    container.append($('<div class="onTurn"></div>').text('#' + turn + ' (' + type + ' / ' + multiplier + 'x chain)'));
    var dealerDiv = $('<div class="damageDealer">&nbsp;</div>');
    container.append(dealerDiv);
    dealerDiv.dotdotdot();
    dealerDiv.text(damageDealer);
    dealerDiv.attr('title',damageDealer);
    container.append($('<div class="unitDamage"></div>').text(formatNumber(Math.round(damage))));
    target.append($('<hr></hr>'));

};

/* * * * * Event callbacks * * * * */

var onNumbersCrunched = function() {
    if (detailsVisible !== null)
        $(document).trigger('detailsRequested',detailsVisible);
};

var onDetailsReady = function(event,details) {
    target.find('.detailsContainer').remove();
    var container = $('<div class="detailsContainer"></div>');
    target.append(container);
    currentModifiers = JSON.parse(JSON.stringify(details.modifiers));
    details.order.forEach(function(data,n) {
        var dealer = data[0].unit.name, type = details.modifiers[n], multiplier = details.multipliers[n];
        multiplier = Math.round(multiplier * 100) / 100;
        appendElements(container,n+1,dealer,type,data[1],multiplier);
    });
};


/* * * * * Body * * * * */

$(document).on('numbersCrunched',onNumbersCrunched);
$(document).on('detailsReady',onDetailsReady);

$(function() {
    $('.damage').click(onDamageClick);
});

})();
