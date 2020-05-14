<template>
  <q-layout>
    <q-page-container>
      <q-page
        class="window-height window-width row justify-center items-center"
        style="background: linear-gradient(#8274C5, #5A4A9F);"
      >
        {{ $route.from }}
        <div class="column q-pa-lg">
          <div class="row">
            <ValidationObserver v-slot="{ invalid }">
              <q-form @submit="handleSubmit">
                <q-card
                  square
                  class="shadow-24 formcard"
                  style="width:300px;height:490px;"
                  :style="isFormRegister ? 'height:570px' : ''"
                >
                  <q-card-section class="bg-deep-purple-7">
                    <div class="card-text">
                      <h4 class="text-h5 text-white q-my-sm">{{ formText }}</h4>
                    </div>
                    <div class="q-mt-lg"></div>
                    <div
                      class="absolute-bottom-right q-pr-md"
                      style="transform: translateY(50%);"
                    >
                      <q-btn
                        @click.prevent="changeForm"
                        fab
                        color="purple-4"
                        class="shadow-1"
                      >
                        <q-icon
                          :class="{
                            addbtn: isFormLogin,
                            registerbtn: !isFormLogin,
                          }"
                          :name="isFormLogin ? 'add' : 'close'"
                        />
                        <q-tooltip
                          content-class="bg-purple-3 text-black shadow-4"
                          :offset="[7, 7]"
                          >{{ toolTip }}</q-tooltip
                        >
                      </q-btn>
                    </div>
                  </q-card-section>
                  <q-card-section
                    v-if="isFormLogin"
                    class="q-px-sm q-pt-xl lgn"
                  >
                    <div v-for="field in loginFields" :key="field.name">
                      <ValidationProvider
                        :rules="field.rules"
                        :name="field.label"
                        :bails="false"
                        v-slot="{ errors, invalid, validated }"
                      >
                        <q-input
                          square
                          clearable
                          clear-icon="las la-times"
                          no-error-icon
                          bottom-slots
                          v-model="formData[field.name]"
                          :type="field.type"
                          :label="field.label"
                          :autofocus="field.autofocus"
                          :error="
                            (invalid && validated) ||
                            (Object.entries(formErrors).length >= 1 &&
                              formErrors[field.name])
                              ? true
                              : false
                          "
                          :error-message="
                            invalid
                              ? errors[0]
                              : formErrors[field.name]
                              ? formErrors[field.name][0]
                              : ''
                          "
                        >
                          <!-- Object.entries(formErrors).length >= 1 &&
                            formErrors[field.name] -->
                          <template v-slot:prepend>
                            <q-icon :name="field.icon" />
                          </template>
                        </q-input>
                      </ValidationProvider>
                    </div>
                  </q-card-section>
                  <q-card-section
                    v-if="isFormRegister"
                    class="q-px-sm q-pt-xl reg"
                  >
                    <div v-for="field in registerFields" :key="field.name">
                      <ValidationProvider
                        :rules="field.rules"
                        :name="field.label"
                        :bails="false"
                        v-slot="{ errors, invalid, validated }"
                      >
                        <q-input
                          square
                          clearable
                          clear-icon="las la-times"
                          no-error-icon
                          bottom-slots
                          v-model="formData[field.name]"
                          :type="field.type"
                          :label="field.label"
                          :autofocus="field.autofocus"
                          :error="
                            (invalid && validated) ||
                            (Object.entries(formErrors).length >= 1 &&
                              formErrors[field.name])
                              ? true
                              : false
                          "
                          :error-message="
                            invalid
                              ? errors[0]
                              : formErrors[field.name]
                              ? formErrors[field.name][0]
                              : ''
                          "
                        >
                          <!-- Object.entries(formErrors).length >= 1 &&
                            formErrors[field.name] -->
                          <template v-slot:prepend>
                            <q-icon :name="field.icon" />
                          </template>
                        </q-input>
                      </ValidationProvider>
                    </div>
                  </q-card-section>
                  <q-card-actions class="q-px-lg">
                    <q-toggle
                      v-if="isFormLogin"
                      v-model="rememberMe"
                      :label="rememberText"
                      class="q-mb-md"
                    />
                    <q-btn
                      type="submit"
                      unelevated
                      size="lg"
                      :disable="invalid"
                      color="purple-4"
                      class="full-width text-white formbtn"
                      :label="btnText"
                    />
                  </q-card-actions>
                  <q-card-section
                    v-if="isFormLogin"
                    class="text-center q-pa-sm q-mt-sm"
                  >
                    <p class="text-grey-6">{{ forgotLink }}</p>
                  </q-card-section>
                </q-card>
              </q-form>
            </ValidationObserver>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { ValidationObserver } from 'vee-validate';

export default {
  name: 'PageLogin',
  components: {
    ValidationObserver,
  },
  data() {
    return {
      url: '/login',
      formText: 'Giriş',
      toolTip: 'Bize Katılın',
      rememberMe: false,
      rememberText: 'Beni Hatırla',
      btnText: 'İÇERİ BUYURUN !',
      forgotLink: 'Parolamı unuttum...',
      formData: {},
      loginFields: [
        {
          name: 'email',
          type: 'email',
          label: 'E-Posta',
          icon: 'email',
          autofocus: true,
          rules: 'required|email',
        },
        {
          name: 'password',
          type: 'password',
          label: 'Parola',
          icon: 'lock',
          rules: 'required',
        },
      ],
      registerFields: [
        {
          name: 'name',
          type: 'text',
          label: 'Ad Soyad',
          icon: 'people',
          autofocus: true,
        },
        {
          name: 'email',
          type: 'email',
          label: 'E-Posta',
          icon: 'email',
        },
        {
          name: 'password',
          type: 'password',
          label: 'Parola',
          icon: 'lock',
        },
        {
          name: 'password_confirmation',
          type: 'password',
          label: 'Parola Tekrar',
          icon: 'lock',
        },
      ],
    };
  },
  methods: {
    ...mapActions('auth', {
      loginOrRegister: 'loginOrRegister',
    }),
    changeForm() {
      if (Object.entries(this.formErrors).length >= 1) {
        this.$store.commit('auth/setFormErrors', []);
        console.log('Form hataları temizlendi');
      }
      if (this.url === '/login') {
        this.url = '/register';
        this.formText = 'Kayıt';
        this.btnText = 'BİZE KATILIN !';
        this.toolTip = 'Giriş Yapın';
      } else if (this.url === '/register') {
        this.url = '/login';
        this.formText = 'Giriş';
        this.btnText = 'İÇERİ BUYURUN !';
        this.toolTip = 'Bize Katılın';
      }
    },
    handleSubmit() {
      this.loginOrRegister({ url: this.url, data: this.formData });
    },
  },
  computed: {
    ...mapState('validation', ['formErrors']),
    isFormLogin() {
      if (this.url === '/login') {
        return true;
      }
      return false;
    },
    isFormRegister() {
      if (this.url === '/register') {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="stylus" scoped>
.card-text {
  position: absolute;
  top: -25px;
  width: 40%;
  height: 50px;
  border-radius: 3px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.5), 0 7px 10px -5px hsla(285, 45%, 58%, 0.71);
  background: linear-gradient(60deg, #a04ebb, #b068c8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.formcard {
  z-index: 1;
  transition: height 0.4s ease;
}

.addbtn {
  transform: rotate(180deg);
  transition: all 0.4s ease;
}

.registerbtn {
  transform: rotate(360deg);
  transition: all 0.4s ease;
}

.formbtn {
  transition: position 0.4s ease;
}

.lgn, .reg {
  z-index: -1;
}

.lgn {
  -webkit-animation: login 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: login 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

.reg {
  -webkit-animation: register 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: register 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

@keyframes login {
  0% {
    -webkit-transform: scaleY(1.5);
    transform: scaleY(1.5);
  }

  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
}

@keyframes register {
  0% {
    -webkit-transform: scaleY(0.4);
    transform: scaleY(0.4);
  }

  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
}
</style>
