    window.addEventListener('load', () => {
        let btn = document.getElementById('empForm');
        btn.addEventListener('submit', () => {
            event.preventDefault();
            console.log('ID: ' + id.value);
            console.log('Employee Name: ' + empName.value);
            console.log('Extension: ' + ext.value);
            console.log('Email: ' + email.value);
            console.log('Department: ' + department.value);
            });
        });    