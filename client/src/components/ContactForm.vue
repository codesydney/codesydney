<template>
  <v-card id="contact-form">
    <v-card-title>
      <a
        color="primary"
        href="mailto:info@code.sydney?Subject=Enquiry"
        target="_top"
      >
        info@code.sydney
      </a>
    </v-card-title>

    <v-form method action="/" class="contact-form">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <font-awesome-icon :icon="['fa', 'user']" />
          </span>
        </div>
        <v-text-field
          v-model="name"
          type="text"
          class="form-control"
          placeholder="Name"
          name="name"
          required
        ></v-text-field>
      </div>

      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </span>
        </div>
        <v-text-field
          v-model="email"
          type="text"
          class="form-control"
          placeholder="Email"
          name="email"
          required
        ></v-text-field>
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <font-awesome-icon :icon="['fa', 'pencil-alt']" />
          </span>
        </div>
        <v-textarea
          v-model="message"
          class="form-control"
          placeholder="Message"
          rows="5"
          name="message"
          required
        ></v-textarea>
      </div>

      <v-btn
        large
        block
        color="secondary"
        type="submit"
        @click.stop.prevent="formSubmit()"
      >
        Submit
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      message: null,
    };
  },
  methods: {
    formSubmit() {
      console.log(`${this.name} from ${this.email} senting ${this.message}`);
    },
  },
};
</script>

<style lang="scss" scoped>
#contact-form {
  max-width: 100%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

h2 .h3 {
  font-size: 1.75rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500px;
  line-height: 1.2;
  color: inherit;
}

a {
  background-color: transparent;
  text-decoration: none;
  &:hover {
    color: #205e6b;
    text-decoration: underline;
  }
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  text-align: center;
}

.fa,
.fab,
.fal,
.far,
.fas {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
}
.input-group-prepend {
  margin-right: -1px;
}
.input-group-prepend,
.input-group-append {
  display: flex;
}
*,
::before,
::after {
  box-sizing: border-box;
}

.input-group {
  margin-bottom: 1rem;
}

.input-group > .form-control:not(:first-child),
.input-group > .custom-select:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group > .form-control,
.input-group > .custom-select,
.input-group > .custom-file {
  position: relative;
  flex: 1 1 auto;
  width: 100%;
  margin-bottom: 0;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

button,
input {
  overflow: visible;
}

button {
  cursor: pointer;
  width: 100%;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
  user-select: none;
  border: 1px solid transparent;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    color: #fff;
    background-color: #297889;
    border-color: #26707f;
    text-decoration: none;
  }
}
button,
select {
  text-transform: none;
}

nput,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.contact-form {
  padding: 1.5vh 1.25vw 2rem 1.25vw;
}
</style>
