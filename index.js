const rangeSlider = $('input[type="range"]');
const toggleBtn = $('.slider');
const prices = $('.price');
const pageViews = $('.page-views');
const duration = $('.duration');
const button = $('button');

let monthlyPriceList = ['8.00', '12.00', '16.00', '24.00', '36.00'];
let yearlyPriceList = ['6.00', '9.00', '12.00', '18.00', '27.00'];
const pageViewsNumbers = ['10K', '50K', '100K', '500K', '1M'];

let isYearly = false; // Initial state is monthly

toggleBtn.click(function (e) {
    isYearly = !isYearly; // Toggle the state
    updatePrices();
});

rangeSlider.change(function (e) {
    updatePrices();
});

function updatePrices() {
    const rangeVal = Number(rangeSlider.val());

    prices.text('$' + (isYearly ? yearlyPriceList[rangeVal] : monthlyPriceList[rangeVal]));
    pageViews.text(pageViewsNumbers[rangeVal]);
    duration.text(isYearly ? '/ year' : '/ month');
}

button.click(function (e) { 
});
