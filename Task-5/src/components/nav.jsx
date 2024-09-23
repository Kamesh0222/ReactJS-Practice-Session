import React from "react";

const Nav = () => {
  return (
    <nav className="bg-transparent">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-24">
          <div className="text-4xl font-bold font-poppins">Farmiest!</div>
          <div className="hidden md:flex space-x-8 font-poppins font-bold text-xl">
            <a href="#home" className="text-[#10B981] underline decoration-2">
              Home
            </a>
            <a href="#store" className=" flex items-center">
              Store
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.29279 7.5535C5.48031 7.35933 5.73462 7.25025 5.99979 7.25025C6.26495 7.25025 6.51926 7.35933 6.70679 7.5535L9.99979 10.9641L13.2928 7.5535C13.385 7.45457 13.4954 7.37567 13.6174 7.32139C13.7394 7.26711 13.8706 7.23854 14.0034 7.23734C14.1362 7.23615 14.2678 7.26235 14.3907 7.31443C14.5136 7.36651 14.6253 7.44341 14.7192 7.54066C14.8131 7.6379 14.8873 7.75354 14.9376 7.88083C14.9879 8.00811 15.0132 8.1445 15.012 8.28202C15.0109 8.41954 14.9833 8.55545 14.9309 8.68181C14.8785 8.80817 14.8023 8.92245 14.7068 9.018L10.7068 13.1609C10.5193 13.355 10.265 13.4641 9.99979 13.4641C9.73462 13.4641 9.48031 13.355 9.29279 13.1609L5.29279 9.018C5.10532 8.82377 5 8.56038 5 8.28575C5 8.01111 5.10532 7.74772 5.29279 7.5535Z"
                  fill="black"
                />
              </svg>
            </a>
            <a href="#contact" className="">
              Contact
            </a>
            <a href="#about" className="">
              About
            </a>
          </div>
        </div>
        <div className="hidden md:flex space-x-6 font-poppins items-center font-bold">
          <div className="flex">
            <div className="space-x-2 border-[1px] p-[0.3rem] border-black">
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.05002 4.04999C6.36284 2.73717 8.14341 1.99963 10 1.99963C11.8566 1.99963 13.6372 2.73717 14.95 4.04999C16.2628 5.36281 17.0004 7.14338 17.0004 8.99999C17.0004 10.8566 16.2628 12.6372 14.95 13.95L10 18.9L5.05002 13.95C4.39993 13.3 3.88425 12.5283 3.53242 11.6789C3.1806 10.8296 2.99951 9.9193 2.99951 8.99999C2.99951 8.08068 3.1806 7.17037 3.53242 6.32104C3.88425 5.47172 4.39993 4.70001 5.05002 4.04999ZM10 11C10.5304 11 11.0392 10.7893 11.4142 10.4142C11.7893 10.0391 12 9.53042 12 8.99999C12 8.46956 11.7893 7.96085 11.4142 7.58578C11.0392 7.2107 10.5304 6.99999 10 6.99999C9.46958 6.99999 8.96088 7.2107 8.5858 7.58578C8.21073 7.96085 8.00002 8.46956 8.00002 8.99999C8.00002 9.53042 8.21073 10.0391 8.5858 10.4142C8.96088 10.7893 9.46958 11 10 11Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="space-x-2 border-y-[1px] border-r-[1px] p-[0.3rem] border-black">
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 4.00003C6.93913 4.00003 5.92172 4.42146 5.17157 5.17161C4.42143 5.92175 4 6.93917 4 8.00003C4 9.0609 4.42143 10.0783 5.17157 10.8285C5.92172 11.5786 6.93913 12 8 12C9.06087 12 10.0783 11.5786 10.8284 10.8285C11.5786 10.0783 12 9.0609 12 8.00003C12 6.93917 11.5786 5.92175 10.8284 5.17161C10.0783 4.42146 9.06087 4.00003 8 4.00003ZM2 8.00003C1.99988 7.05574 2.22264 6.12475 2.65017 5.28278C3.0777 4.4408 3.69792 3.71163 4.4604 3.15456C5.22287 2.59749 6.10606 2.22825 7.03815 2.07687C7.97023 1.92549 8.92488 1.99625 9.82446 2.28338C10.724 2.57052 11.5432 3.06594 12.2152 3.72933C12.8872 4.39272 13.3931 5.20537 13.6919 6.10117C13.9906 6.99697 14.0737 7.95063 13.9343 8.88459C13.795 9.81855 13.4372 10.7064 12.89 11.476L17.707 16.293C17.8892 16.4816 17.99 16.7342 17.9877 16.9964C17.9854 17.2586 17.8802 17.5094 17.6948 17.6949C17.5094 17.8803 17.2586 17.9854 16.9964 17.9877C16.7342 17.99 16.4816 17.8892 16.293 17.707L11.477 12.891C10.5794 13.5293 9.52335 13.9082 8.42468 13.9862C7.326 14.0641 6.22707 13.8381 5.2483 13.333C4.26953 12.8279 3.44869 12.0631 2.87572 11.1224C2.30276 10.1817 1.99979 9.10147 2 8.00003Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>

          <div className="flex gap-1 items-center justify-center text-xs border-[1px] p-[0.2rem] border-black">
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_204_37)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_204_37">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Account
          </div>
          <div className="flex gap-1 items-center justify-center text-xs border-[1px] p-[0.2rem] border-black">
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 9V5C14 3.93913 13.5786 2.92172 12.8284 2.17157C12.0783 1.42143 11.0609 1 10 1C8.93913 1 7.92172 1.42143 7.17157 2.17157C6.42143 2.92172 6 3.93913 6 5V9H14ZM3 7H17L18 19H2L3 7Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Bags
          </div>
          <div className="flex gap-1 items-center text-xs border-[1px] p-[0.2rem] border-black">
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_204_64)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.083 9H6.029C6.118 7.454 6.412 6.03 6.866 4.882C6.13501 5.32992 5.50842 5.92919 5.02838 6.6395C4.54834 7.34982 4.22598 8.1547 4.083 9ZM10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2ZM10 4C9.924 4 9.768 4.032 9.535 4.262C9.297 4.496 9.038 4.885 8.798 5.444C8.409 6.351 8.125 7.586 8.032 9H11.968C11.875 7.586 11.591 6.351 11.202 5.444C10.962 4.884 10.702 4.496 10.465 4.262C10.232 4.032 10.076 4 10 4ZM13.971 9C13.882 7.454 13.588 6.03 13.134 4.882C13.865 5.32992 14.4916 5.92919 14.9716 6.6395C15.4517 7.34982 15.774 8.1547 15.917 9H13.971ZM11.968 11H8.032C8.125 12.414 8.409 13.649 8.798 14.556C9.038 15.116 9.298 15.504 9.535 15.738C9.768 15.968 9.924 16 10 16C10.076 16 10.232 15.968 10.465 15.738C10.703 15.504 10.963 15.115 11.202 14.556C11.591 13.649 11.875 12.414 11.968 11ZM13.134 15.118C13.588 13.971 13.882 12.546 13.971 11H15.917C15.774 11.8453 15.4517 12.6502 14.9716 13.3605C14.4916 14.0708 13.865 14.6701 13.134 15.118ZM6.866 15.118C6.412 13.97 6.118 12.546 6.03 11H4.083C4.22598 11.8453 4.54834 12.6502 5.02838 13.3605C5.50842 14.0708 6.13501 14.6701 6.866 15.118Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_204_64">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            EN
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.29279 7.5535C5.48031 7.35933 5.73462 7.25025 5.99979 7.25025C6.26495 7.25025 6.51926 7.35933 6.70679 7.5535L9.99979 10.9641L13.2928 7.5535C13.385 7.45457 13.4954 7.37567 13.6174 7.32139C13.7394 7.26711 13.8706 7.23854 14.0034 7.23734C14.1362 7.23615 14.2678 7.26235 14.3907 7.31443C14.5136 7.36651 14.6253 7.44341 14.7192 7.54066C14.8131 7.6379 14.8873 7.75354 14.9376 7.88083C14.9879 8.00811 15.0132 8.1445 15.012 8.28202C15.0109 8.41954 14.9833 8.55545 14.9309 8.68181C14.8785 8.80817 14.8023 8.92245 14.7068 9.018L10.7068 13.1609C10.5193 13.355 10.265 13.4641 9.99979 13.4641C9.73462 13.4641 9.48031 13.355 9.29279 13.1609L5.29279 9.018C5.10532 8.82377 5 8.56038 5 8.28575C5 8.01111 5.10532 7.74772 5.29279 7.5535Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
