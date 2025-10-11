/** SweetAlertHandling **/
import Swal from "sweetalert2";
import { Messages } from "./config";

const customSwal = Swal.mixin({
  customClass: {
    popup: "swal-absolute-top",
  },
  didOpen: (popup) => {
    popup.parentElement!.style.zIndex = "2500"; // ✅ DOM darajasida yuqoriga chiqaradi
  },
});

export const sweetErrorHandling = async (err: any) => {
  const error = err.response?.data ?? err;
  const message = error?.message ?? Messages.error1;
  await customSwal.fire({
    icon: "error",
    text: message,
    background: "rgba(255,255,255,0.95)",
    confirmButtonColor: "#1976d2",
    allowOutsideClick: true,
  });
};

export const sweetTopSuccessAlert = async (msg: string, duration: number = 2000) => {
  await customSwal.fire({
    position: "center",
    icon: "success",
    title: msg,
    showConfirmButton: false,
    timer: duration,
    background: "rgba(255,255,255,0.9)",
  });
};


export const sweetTopSmallSuccessAlert = async (
  msg: string,
  duration: number = 2000
) => {
  const Toast = customSwal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: duration,
    timerProgressBar: true,
    background: "rgba(255,255,255,0.9)",
  });

  Toast.fire({
    icon: "success",
    title: msg,
  });
};


export const sweetFailureProvider = (
  msg: string,
  show_button: boolean = false,
  forward_url: string = ""
) => {
  Swal.fire({
    icon: "error",
    title: msg,
    showConfirmButton: show_button,
    confirmButtonText: "OK",
  }).then(() => {
    if (forward_url !== "") {
      window.location.replace(forward_url);
    }
  });
};
