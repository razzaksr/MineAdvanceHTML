$(document).ready(()=>{
    let repository=[]
    let loadStore=()=>{
        var data = localStorage.getItem('applicants')
        repository=JSON.parse(data)
    }
    const iterate=()=>{
        loadStore()
        let content = ""
        repository.map((each)=>{
            content+="<tr>"
            content+="<td>"+each.applicantName+"</td><td>"+
            each.applicantPan+"</td><td>"+each.applicantContact+"</td><td>"+
            each.applicantLimit+"</td></tr>"
        })
        document.getElementById("records").innerHTML=content
    }
    //iterate()
    loadStore()

    // Number of rows per page
    var rowsPerPage = 1;
    var currentPage = 1;

    // Function to display table rows based on current page
    function displayRows() {
        var startIndex = (currentPage - 1) * rowsPerPage;
        var endIndex = startIndex + rowsPerPage;
        var tableBody = $('#records');
        tableBody.empty();
        for (var i = startIndex; i < endIndex && i < repository.length; i++) {
            tableBody.append("<tr><td>"+repository[i].applicantName+"</td><td>"+
            repository[i].applicantPan+"</td><td>"+repository[i].applicantContact+"</td><td>"+
            repository[i].applicantLimit+"</td></tr>");
        }
    }

    // Function to update pagination controls with page numbers
    /*
    function updatePagination() {
        var totalPages = Math.ceil(repository.length / rowsPerPage);
        var pagination = $('#pagination');
        pagination.empty();
        for (var i = 1; i <= totalPages; i++) {
            pagination.append('<button class="col-1 btn btn-outline-primary me-2" data-page="' + i + '">' + i + '</button>');
        }
        $('button').click(function() {
            currentPage = parseInt($(this).attr('data-page'));
            displayRows();
            updatePagination();
        });
    }
    */
    /*
    function updatePagination() {
        var totalPages = Math.ceil(repository.length / rowsPerPage);
        var pagination = $('#pagination');
        pagination.empty();
        
        // Previous button
        if (currentPage > 1) {
            pagination.append('<button class="prev col-1 btn btn-outline-primary me-2"> <- </button>');
        }

        pagination.append('<span class="col-1 current-page">' + currentPage + ' / ' + totalPages + '</span>');
        
        // Next button
        if (currentPage < totalPages) {
            pagination.append('<button class="next col-1 btn btn-outline-primary me-2"> -> </button>');
        }

        $('button').click(function() {
            var btn = $(this);
            if (btn.hasClass('prev')) {
                currentPage--;
            } else if (btn.hasClass('next')) {
                currentPage++;
            }
            displayRows();
            updatePagination();
        });
    }
    */
    function updatePagination() {
        var totalPages = Math.ceil(repository.length / rowsPerPage);
        var pagination = $('#pagination');
        pagination.empty();
        
        // Previous button
        if (currentPage > 1) {
            pagination.append('<button class="prev col-1 btn btn-outline-primary me-2"> <- </button>');
        }

        //pagination.append('<span class="col-1 current-page">' + currentPage + ' / ' + totalPages + '</span>');
        pagination.append('<button class="col-1 btn btn-outline-primary me-2" data-page="' + currentPage + '">' + currentPage + '</button>');
        
        // Next button
        if (currentPage < totalPages) {
            pagination.append('<button class="next col-1 btn btn-outline-primary me-2"> -> </button>');
        }

        $('button').click(function() {
            var btn = $(this);
            if (btn.hasClass('prev')) {
                currentPage--;
            } else if (btn.hasClass('next')) {
                currentPage++;
            }
            displayRows();
            updatePagination();
        });
    }
    displayRows()
    updatePagination()
})