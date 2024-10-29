$(document).ready(function() {
    // Sidebar toggle functionality
    $('.menu-icon').click(function() {
        $('.sidebar').toggleClass('collapse');
        adjustMainContentMargin();
    });

    $('.sidebar').hover(
        function() {
            if ($(this).hasClass('collapse')) {
                $(this).removeClass('collapse');
                adjustMainContentMargin();
            }
        },
        function() {
            if (!$(this).hasClass('collapse') && $(window).width() > 768) {
                $(this).addClass('collapse');
                adjustMainContentMargin();
            }
        }
    );

    function adjustMainContentMargin() {
        if ($('.sidebar').hasClass('collapse')) {
            $('.main-content').css('margin-left', '70px');
        } else {
            $('.main-content').css('margin-left', '250px');
        }
    }

    // Responsive behavior
    $(window).resize(function() {
        if ($(window).width() <= 768) {
            $('.sidebar').addClass('collapse');
        }
        adjustMainContentMargin();
    });

    // Chart animations
    $('canvas').hover(
        function() {
            $(this).css({
                filter: 'brightness(1.2)',
                transform: 'scale(1.05)',
                transition: 'all 0.3s ease'
            });
        }, 
        function() {
            $(this).css({
                filter: 'brightness(1)',
                transform: 'scale(1)',
                transition: 'all 0.3s ease'
            });
        }
    );

    // Animate cards on load
    $('.card').css({
        opacity: 0,
        transform: 'translateY(20px)'
    }).each(function(index) {
        $(this).delay(100 * index).animate({
            opacity: 1,
            transform: 'translateY(0)'
        }, 500);
    });

    // Animate charts on load
    $('.chart, .budget-container').css({
        opacity: 0,
        transform: 'translateY(20px)'
    }).each(function(index) {
        $(this).delay(300 + 100 * index).animate({
            opacity: 1,
            transform: 'translateY(0)'
        }, 500);
    });

    // Bar chart initialization
    const ctxBar = document.getElementById('myBarChart').getContext('2d');
    const myBarChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Revenue',
                data: [12000, 19000, 3000, 5000, 20000, 30000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Pie charts initialization
    const ctxPie1 = document.getElementById('myPieChart1').getContext('2d');
    const myPieChart1 = new Chart(ctxPie1, {
        type: 'pie',
        data: {
            labels: ['Rent', 'Utilities', 'Salaries', 'Supplies', 'Marketing'],
            datasets: [{
                label: 'Expenses',
                data: [5000, 2000, 15000, 3000, 5000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    const ctxPie2 = document.getElementById('myPieChart2').getContext('2d');
    const myPieChart2 = new Chart(ctxPie2, {
        type: 'pie',
        data: {
            labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
            datasets: [{
                label: 'Revenue',
                data: [8000, 12000, 7000, 9000, 5000],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
