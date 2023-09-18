let pool=[
    {
        "name":"Razak Mohamed S",
        "joined":2020,
        "Department":"CSE",
        "Specialization":"Web development"
    },
    {
        "name":"Rasheedha R",
        "joined":2021,
        "Department":"CSE",
        "Specialization":"Web development"
    },
    {
        "name":"Annamalai S",
        "joined":2022,
        "Department":"ECE",
        "Specialization":"Testing"
    },
    {
        "name":"Manoj",
        "joined":2023,
        "Department":"EEE",
        "Specialization":"Full Stack"
    },
    {
        "name":"Rajiya",
        "joined":2023,
        "Department":"CSE",
        "Specialization":"App development"
    },
    {
        "name":"Sabarinathan",
        "joined":2020,
        "Department":"EEE",
        "Specialization":"Machines"
    },
]

const filterOneStaffByDeptNname=(name,dept)=>{
    const info=pool.filter((v)=>{
        return v.name==name && v.Department==dept
    })
    return info
}

const filterByYear=(year)=>{
    alert("REceived "+year)
    const ha=pool.filter((k)=>{
        return k.joined==year
    })
    ha.map((v)=>{
        alert(JSON.stringify(v.Department))
    })
    return ha;
}

const filterByDept=(dept)=>{
    const ha=pool.filter((k)=>{
        return k.Department==dept
    })
    ha.map((v)=>{
        alert(JSON.stringify(v.name))
    })
    return ha;
}