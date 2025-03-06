document.addEventListener("DOMContentLoaded", function () {
    const group1 = document.getElementById("group1");
    const group2 = document.getElementById("group2");

    const group1Files = ["샘플_기존모델.mp3", "샘플_1안_기존모델축소.mp3", "샘플_2안_경량화.mp3", "샘플_2안_경량화_추가축소.mp3"];
    const group2Files = ["샘플2_기존모델.mp3", "샘플2_1안_기존모델축소.mp3", "샘플2_2안_경량화.mp3", "샘플2_2안_경량화_추가축소.mp3"];
    function cleanFileName(fileName) {
        return fileName.replace(/^샘플\d*_/u, "").replace(/\.mp3$/i, ""); 
    }
    
    
    function createAudioPlayer(fileName, group) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <p>${cleanFileName(fileName)}</p>
            <audio controls>
                <source src="mp3/${fileName}" type="audio/mpeg">
                브라우저가 오디오를 지원하지 않습니다.
            </audio>
        `;
        group.appendChild(listItem);
    }

    group1Files.forEach(file => createAudioPlayer(file, group1));
    group2Files.forEach(file => createAudioPlayer(file, group2));
});
