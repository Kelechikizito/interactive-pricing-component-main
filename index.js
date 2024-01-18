
const rangeSlider = $('input[type="range"]');
const toggleBtn = $('.slider');

const prices = $('.price');
const pageViews = $('.page-views');
const duration = $('.duration');

const monthlyPriceList = [8, 12, 16, 24, 26];
const yearlyPriceList = [6, 9, 12, 18, 27];
const pageViewsNumbers = ['10K', '50K', '100K', '500K', '1M'];




rangeSlider.click(function (e) { 
    const rangeVal = e.target.value;
    
    if (rangeVal === '0') {
        pageViews.text('10K');
    } else if (rangeVal === '1') {
        pageViews.text('50K');
    }
    
    // e.preventDefault();
    
});


// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month