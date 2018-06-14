var models = [{
        brand: "nokia",
        name: "3100",
        value: "3100"
    },
    {
        brand: "nokia",
        name: "1100",
        value: "1100"
    },
    {
        brand: "apple",
        name: "iPhone SE",
        value: "se"
    },
    {
        brand: "apple",
        name: "iPhone 5S",
        value: "5s"
    },
    {
        brand: "samsung",
        name: "Samsung S8",
        value: "s8"
    },
    {
        brand: "samsung",
        name: "Samsung S7",
        value: "s7"
    },
    {
        brand: "samsung",
        name: "Samsung S6",
        value: "s6"
    }
];

function compareModels(a, b) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
}

function cleanModelDropdown() {
    document.getElementById("model").innerHTML = "<option selected></option>";
};

function onManufacturerChange() {
    cleanModelDropdown();
    var value = document.getElementById("manufacturer").value;
    if (value) {
        fillModelDropdown(value);
    }
};

function filterModelsByBrand(brand) {
    return models.filter(function (item) {
        return item.brand == brand;
    });
}

function fillModelDropdown(brand) {
    var select = document.getElementById("model");
    filterModelsByBrand(brand).forEach(function (item) {
        var option = document.createElement('option');
        option.text = item.name;
        option.value = item.value;
        select.add(option);
    });
};

function showError (message) {
    document.getElementById('error').innerText = message;
}

function clearError () {
    document.getElementById("error").innerHTML = "";
}

function generateReport() {
    clearError();
    document.getElementById("report").innerHTML = "";

    var manufacturer = document.getElementById("manufacturer").value;
    if (!manufacturer) {
        showError("Please select a manufacturer");
        return;
    }

    var table = document.createElement('table'),
        tableBody = document.createElement('tbody'),
        tableNameRow = document.createElement('tr'),
        tableNameColumn = document.createElement('td');

    tableNameColumn.setAttribute('colspan', '2');
    tableNameColumn.appendChild(document.createTextNode(manufacturer));
    tableNameRow.appendChild(tableNameColumn);
    tableBody.appendChild(tableNameRow);

    var models = filterModelsByBrand(manufacturer).sort(compareModels),
        selectedModel = document.getElementById("model").value;
    if (selectedModel) {
        models = models.filter(function (item) {
            return item.value === selectedModel;
        })
    }

    models.forEach(function (model) {
        var tr = document.createElement('tr'),
            modelColumn = document.createElement('td'),
            availibilityColumn = document.createElement('td'),
            isModelAvailiable = model.name.length % 2 === 1,
            modelAvailiabilityStatus = isModelAvailiable ? "Available" : "Not Available";
        modelColumn.appendChild(document.createTextNode(model.name));
        availibilityColumn.appendChild(document.createTextNode(modelAvailiabilityStatus));
        availibilityColumn.classList.add(isModelAvailiable ? "available" : "non-availiable")
        tr.appendChild(modelColumn);
        tr.appendChild(availibilityColumn);
        tableBody.appendChild(tr);
    });

    table.appendChild(tableBody);
    document.getElementById("report").appendChild(table);

}
