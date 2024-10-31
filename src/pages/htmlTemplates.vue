<template>
  <div>
    <div>Must know this HTML attributes tips....</div>
    <div class="flex flex-col gap-[4rem]">
      <span class="flex flex-col">
        You can use the accept attribute with the <input /> element (only for
        file type) to specify the types of files a server can accept.
        <input type="file" accept=".jpg, .jpeg, .png" />
      </span>
      <span class="flex flex-col">
        The autocomplete attribute can be used with the form, input and textarea
        elements to control the browser’s autocomplete feature.
        <input type="text" class="border-2 border-[red]" autocomplete="on" />
      </span>
      <span class="flex flex-col">
        You can use the contenteditable attribute to specify whether the
        element’s content is editable or not. It allows users to modify the
        content within the element. This is a global attribute which means you
        can use this attribute with all HTML elements.
        <div contenteditable="true" class="border-2 border-[blue] p-2">
          this is editable div
        </div>
      </span>
      <span class="flex flex-col">
        You can use the download attribute with the element to specify that when
        a user clicks the link, the linked resource should be downloaded rather
        than navigated to.
        <a href="cv.pdf" download="cv.pdf"
          ><button class="border-2 bg-[pink] p-2 rounded-md">
            Download this CV
          </button></a
        >
      </span>
      <span class="flex flex-col" @click="ishidden = !ishidden">
        You can use the 'hidden' attribute to hide the element on the web page.
        This is useful for controlling visibility through JavaScript or CSS.
        This is a global attribute.
        <div :hidden="ishidden" class="h-[2rem] bg-[blue] text-white">this is hidden</div>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const ishidden = ref(false) 
</script>

<style lang="scss" scoped></style>
