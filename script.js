
document.getElementById('sortButton').addEventListener('click', function() {
    const houses = [
        { name: "Gryffindor", color: "#ae0001" },
        { name: "Hufflepuff", color: "#ffdb00" },
        { name: "Ravenclaw", color: "#222f5b" },
        { name: "Slytherin", color: "#2a623d" },
        { name: "Muggle", color: "rgb(233, 156, 57)"}
    ];

    const randomHouse = houses[Math.floor(Math.random() * houses.length)];
    const resultDiv = document.getElementById('result');
    const container = document.getElementById('container');

    resultDiv.textContent = `You belong to ${randomHouse.name}!`;
    container.style.backgroundColor = randomHouse.color;
}); 
