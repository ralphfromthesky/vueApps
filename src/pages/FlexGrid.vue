<template>
    <div class="w-screen">
        <div>
            <div class="text-[2rem] text-center font-bold">
                thi is flex Responsive
            </div>
            <div class="mainFlex ">
                <div>A</div>
                <div>B</div>
                <div>C</div>
                <div>E</div>
            </div>
            <div class="items text-center mb-[2rem]">
                this is 300px
            </div>
            <div class="flex justify-center">
                <div class="puts">
                    <input type="text">
                    <input type="text">
                    <input type="text">
                    <button>Send</button>
                </div>

            </div>
            <div class="container">
                <div class="box">1</div>
                <div class="box">2</div>
                <div class="box">3</div>
            </div>
            <div>
                flex-shrink
            </div>
            <div class="containers">
                <div class="item one">Item 1</div>
                <div class="item two">Item 2</div>
                <div class="item three">Item 3</div>
            </div>

            <div>
                <div class="text-[2rem] text-center font-bold">
                    thi is Grid layout<div class="text-[1rem]">
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    </div>
                </div>
                <div class="mainGrid">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style>
.mainFlex {
    display: flex;
    flex-wrap: wrap;
    border: 2px solid red;
    width: 100%;
}

.mainFlex>div {
    flex-grow: 1;
    border: 2px solid blue;
    /* flex-basis: 300px; */
    min-width: 300px;
    text-align: center;
}

.items {
    width: 300px;
    border: 2px solid blue;
}

.puts {
    border: 2px solid gray;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}


.puts>input {
    border: 2px solid limegreen;
    padding: 5px;
    border-radius: 5px;
}


.puts input:nth-child(1) {
    flex: 1 0 400px;
    background-color: #d5dae0;

}

.puts input:nth-child(2) {
    background-color: #d5dae0;
    flex: 1 0 300px;
}

.puts input:nth-child(3) {
    background-color: #d5dae0;
    flex: 1 0 200px;

}

.puts button:nth-child(4) {
    background-color: rgb(37, 102, 223);
    flex: 1 0 100px;

}

.container {
    border: 2px solid rgb(186, 31, 233);
    display: flex;
    padding: 2px;

}

.container .box:nth-child(2) {
    flex-shrink: 1;
}

.box {
    flex-grow: 1;
    border: 2px solid black;
}

.containers {
    display: flex;
    width: 300px;
    /* Limited space */
    border: 2px solid black;
}

.containers>div {
    border: 2px solid red;
}

.item {
    flex-basis: 150px;
    /* Each item starts at 150px */
    flex-shrink: 1;
    /* Default: can shrink */
}

.one {
    flex-shrink: 0;
    /* This item won't shrink */
}

.two {
    flex-shrink: 2;
    /* This item shrinks twice as much as others */
}

.three {
    flex-shrink: 1;
    /* Shrinks normally */
}
.mainGrid {
    border: 2px solid red;
    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    gap: 10px;
    padding: 5px;
}
.mainGrid > div::after {
    display: flex;
    justify-content: center;
    align-items: center;
    content: 'GRID';
}
.mainGrid > div {
    border: 2px solid blue;
}
</style>