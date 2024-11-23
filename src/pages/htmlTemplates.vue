<template>
  <div class="p-2">
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
        <div :hidden="ishidden" class="h-[2rem] bg-[blue] text-white">
          this is hidden
        </div>
      </span>
      <span class="flex flex-col">
        The loading attribute can be used with the <img /> element to control
        how the browser loads the image. It has three values: “eager,” “lazy,”
        and “auto.”
        <img
          src="/images/mariokart.png"
          class="h-[5rem] w-[4rem]"
          loading="lazy"
        />
      </span>
      <span class="flex flex-col">
        The multiple attribute can be used with the input and select elements to
        allow users to select/enter multiple values at once.
        <div class="flex flex-col">
          <input type="file" multiple />
          <br />
          <select multiple>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="cherry">Cherry</option>
            <option value="date">Date</option>
          </select>
        </div>
      </span>
 
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const ishidden = ref(false);
</script>

<style lang="scss" scoped></style>
