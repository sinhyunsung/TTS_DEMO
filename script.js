

document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("audioTable");

    const models = [
        { name: "기존모델", prefix: "기존모델" },
        { name: "1안_기존모델축소", prefix: "1안-기존모델축소" },
        { name: "2안_경량화", prefix: "2안-경량화" },
        { name: "2안_경량화추가축소", prefix: "2안-경량화추가축소" },
    ];

    const group1Files = [0, 1];


    function createTableRow(model) {
        const row = document.createElement("tr");
        row.innerHTML = `<td class="first-col">${model.name}</td>`;

        group1Files.forEach((_, index) => {
            const fileName = `샘플${index + 1}_${model.prefix}.mp3`;
            row.innerHTML += `
                <td>
                    <audio controls>
                        <source src="./mp3/${fileName}" type="audio/mpeg">
                        브라우저가 오디오를 지원하지 않습니다.
                    </audio>
                </td>`;
        });

        tableBody.appendChild(row);
    }

    models.forEach(model => createTableRow(model));
});
