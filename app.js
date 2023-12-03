new Vue({
    el: '#app',
    data: {
        newPlant: {
            name: '',
            wateringFrequency: '',
        },
        plants: [],
    },
    methods: {
        addPlant: function () {
            if (this.newPlant.name && this.newPlant.wateringFrequency) {
                this.plants.push({
                    name: this.newPlant.name,
                    wateringFrequency: this.newPlant.wateringFrequency,
                    lastWatered: null,
                });
                this.newPlant.name = '';
                this.newPlant.wateringFrequency = '';
            } else {
                alert('Please enter plant name and watering frequency.');
            }
        },
        waterPlant: function (index) {
            this.plants[index].lastWatered = new Date().toLocaleDateString();
        },
        removePlant: function (index) {
            this.plants.splice(index, 1);
        },
    },
});
