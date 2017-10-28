


var first_term_ctx = document.getElementById("first_term").getContext('2d');
var first_term = new Chart(first_term_ctx, {
    type: 'bar',
    data: {
        labels : ["前5名","前10名","前20名","前50名"],
        datasets: [
            {
                label: "平均成绩/人",
                data: [3, 6, 10, 21],
                backgroundColor: [
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd'
                ],
                borderColor: [
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd'
                ],
                borderWidth: 1
            },
            {
                label: "平均学分绩/人",
                data: [3, 6, 12, 20],
                backgroundColor: [
                    '#2816dd',
                    '#2816dd',
                    '#2816dd',
                    '#2816dd'
                ],
                borderColor: [
                    '#2816dd',
                    '#2816dd',
                    '#2816dd',
                    '#2816dd'
                ],
                borderWidth: 1
            },
            {
                label: "加权学分成绩/人",
                data: [2, 4, 9, 21],
                backgroundColor: [
                    '#ae0bdd',
                    '#ae0bdd',
                    '#ae0bdd',
                    '#ae0bdd'
                ],
                borderColor: [
                    '#ae0bdd',
                    '#ae0bdd',
                    '#ae0bdd',
                    '#ae0bdd'
                ],
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});




var second_term_ctx = document.getElementById("second_term").getContext('2d');
var second_term = new Chart(second_term_ctx, {
    type: 'bar',
    data: {
        labels : ["前5名","前10名","前20名","前50名"],
        datasets: [
            {
                label: "平均成绩/人",
                data: [2, 3, 8, 19],
                backgroundColor: [
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd'
                ],
                borderColor: [
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd'
                ],
                borderWidth: 1
            },
            {
                label: "平均学分绩/人",
                data: [2, 5, 7, 18],
                backgroundColor: [
                    '#2816dd',
                    '#2816dd',
                    '#2816dd',
                    '#2816dd'
                ],
                borderColor: [
                    '#2816dd',
                    '#2816dd',
                    '#2816dd',
                    '#2816dd'
                ],
                borderWidth: 1
            },
            {
                label: "加权学分成绩/人",
                data: [2, 4, 7, 19],
                backgroundColor: [
                    '#ae0bdd',
                    '#ae0bdd',
                    '#ae0bdd',
                    '#ae0bdd'
                ],
                borderColor: [
                    '#ae0bdd',
                    '#ae0bdd',
                    '#ae0bdd',
                    '#ae0bdd'
                ],
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});



var english_exm_cxt = document.getElementById("english_exm").getContext('2d');
var english_exm = new Chart(english_exm_cxt, {
    type: 'bar',
    data: {
        labels : ["计1","计2","计3","软1","软2","软3","网1","网2","物1","物2"],
        datasets: [
            {
                label: "通过人数/人",
                data: [
                    16,
                    19,
                    11,
                    16,
                    21,
                    18,
                    16,
                    13,
                    24,
                    12
                ],
                backgroundColor: [
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd'
                ],
                borderColor: [
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd',
                    '#00ccdd'
                ],
                borderWidth: 1
            },
            {
                label: "报考人数/人",
                data: [
                    24,
                    33,
                    26,
                    30,
                    33,
                    34,
                    28,
                    30,
                    32,
                    24

                ],
                backgroundColor: [
                    '#2816dd',
                    '#2816dd',
                    '#2816dd',
                    '#2816dd',
                    '#2816dd',
                    '#2816dd',
                    '#2816dd',
                    '#2816dd',
                    '#2816dd',
                    '#2816dd'
                ],
                borderColor: [
                    '#2816dd',
                    '#2816dd',
                    '#2816dd',
                    '#2816dd',
                    '#2816dd',
                    '#2816dd',
                    '#2816dd',
                    '#2816dd',
                    '#2816dd',
                    '#2816dd'
                ],
                borderWidth: 1
            },
            {
                label: "通过率",
                data: [
                    67,
                    58,
                    42,
                    53,
                    64,
                    53,
                    57,
                    43,
                    75,
                    50

                ],
                backgroundColor: [
                    '#ae0bdd',
                    '#ae0bdd',
                    '#ae0bdd',
                    '#ae0bdd',
                    '#53dd1b',
                    '#ae0bdd',
                    '#ae0bdd',
                    '#ae0bdd',
                    '#ae0bdd',
                    '#ae0bdd'
                ],
                borderColor: [
                    '#ae0bdd',
                    '#ae0bdd',
                    '#ae0bdd',
                    '#ae0bdd',
                    '#53dd1b',
                    '#ae0bdd',
                    '#ae0bdd',
                    '#ae0bdd',
                    '#ae0bdd',
                    '#ae0bdd'
                ],
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});