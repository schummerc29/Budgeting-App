var grandTotal = 0;
var billsBudget = 0;
var billsExpense = 0;
var foodBudget = 0;
var foodExpense = 0;
var funBudget = 0;
var funExpense = 0;
var otherBudget = 0;
var otherExpense = 0;
var totalBudget = 0;
var totalExpense = 0;

$('#bill-entry').hide();
$('.category').hide();
$('.calculate').hide();
$('.breakdown').hide();


$('#budget-submit').on('click', function (e) {
    e.preventDefault();

    // Display budget amounts for each category and total them together
    billsBudget += $('#budget-bills').val();
    $('#bills-entered').text('Bills: $ ' + Number(billsBudget));

    foodBudget += $('#budget-food').val();
    $('#food-entered').text('Food: $ ' + Number(foodBudget));

    funBudget += $('#budget-fun').val();
    $('#fun-entered').text('Fun: $ ' + Number(funBudget));

    otherBudget += $('#budget-other').val();
    $('#other-entered').text('Other: $ ' + Number(otherBudget));

    totalBudget = Number(billsBudget) + Number(foodBudget) + Number(funBudget) + Number(otherBudget);
    $('#total-entered').text('Total: $ ' + Number(totalBudget));

    // Hide budget form and show expenses
    $('#budget').hide();
    $('.category').show();
    $('.breakdown').show();
});


$('button#add-bill').on('click', function () {
    $('button#add-bill').hide();
    $('form#bill-entry').show();
});

$('button#bills-submit').on('click', function (e) {
    e.preventDefault();

    // Stores values entered in inputs
    var entryType = $('#type').val();
    var entryText = $('input#bills-text:text').val();
    var entryAmount = $('input#bills-amount:text').val();

    // Adds expense to list and updates grand total
    $('#bills').append('<li> (' + entryType + ') ' + entryText + ': $' + entryAmount + '</li>');
    newExpense = Number(entryAmount);
    grandTotal += newExpense;
    $('.grand-total').text('Grand Total: $ ' + grandTotal);

    // Clears input areas
    $('#type').val('');
    $('input').val('');

    // Resets page view
    $('button#add-bill').show();
    $('#bill-entry').hide();
    $('.calculate').show();
});



/*
$('button#add-food').on('click', function() {
    $('button#add-food').hide();
    $('form#food-entry').show();
});

$('button#add-fun').on('click', function() {
    $('button#add-fun').hide();
    $('form#fun-entry').show();
});


$('button#bills-submit').on('click', function(e) {
    e.preventDefault();
    var entryText = $('input#bills-text:text').val();
    var entryAmount = $('input#bills-amount:text').val();
    $('#bills').append('<li>' + entryText + ': $' + entryAmount + '</li>');
    entryText = '';
    entryAmount = '';
    $('button#add-bill').show();
    $('#bill-entry').hide();
});

$('button#food-submit').on('click', function(e) {
    e.preventDefault();
    var entryText = $('input#food-text:text').val();
    var entryAmount = $('input#food-amount:text').val();
    $('#food').append('<li>' + entryText + ': $' + entryAmount + '</li>');
    entryText = '';
    entryAmount = '';
    $('button#add-food').show();
    $('#food-entry').hide();
});

$('button#fun-submit').on('click', function(e) {
    e.preventDefault();
    var entryText = $('input#fun-text:text').val();
    var entryAmount = $('input#fun-amount:text').val();
    $('#fun').append('<li>' + entryText + ': $' + entryAmount + '</li>');
    entryText = '';
    entryAmount = '';
    $('button#add-fun').show();
    $('#fun-entry').hide();
});
*/