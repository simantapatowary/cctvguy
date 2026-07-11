const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    let count = 0;

    const speed = target / 80;

    function updateCounter() {

        count += speed;

        if (count < target) {

            counter.textContent = Math.ceil(count);

            requestAnimationFrame(updateCounter);

        } else {

            counter.textContent = target;

        }

    }

    updateCounter();

});