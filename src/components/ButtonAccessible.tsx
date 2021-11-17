import { Button, styled } from '@grupoboticario/flora-react'
import React from 'react'
import type { ReactComponent } from 'types'

const StyledButton = styled(Button, {
  variants: {
    alt: {
      true: {
        color: '#000F99',
        backgroundColor: '$actionNavigationAltStatic',
        '&:focus': {
          backgroundColor: '$actionNavigationAltStatic',
        },
      },
    },
  },
})

export const ButtonAccessible = (
  props: ReactComponent & React.ComponentPropsWithoutRef<typeof StyledButton>,
) => (
  <StyledButton
    {...props}
    css={{
      width: 40,
      height: 40,
      padding: 0,
      ...props.css,
    }}
    label="Botão de acessibilidade"
  >
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.52516 7.48916C8.12342 7.51092 7.72258 7.55184 7.31903 7.54662C6.99111 7.54248 6.68493 7.4737 6.41635 7.28412C6.31195 7.21011 6.20325 7.12174 6.24107 6.98135C6.27889 6.84096 6.41884 6.82899 6.54317 6.81549C6.9026 6.77386 7.19752 6.71005 7.55296 6.62047C8.1977 6.45787 8.78877 6.17404 9.3796 5.88389C9.98901 5.58461 10.6138 5.31035 11.2751 5.13122C11.6306 5.03479 11.998 5.04589 12.3621 5.11533C12.5106 5.14544 12.6451 5.22078 12.7455 5.33016C13.1172 5.71211 14.0613 6.30747 14.0613 6.30747C14.0613 6.30747 14.5273 6.68881 14.6116 6.99027C14.7232 7.3899 14.6498 7.7793 14.5436 8.16761C14.3654 8.8243 14.107 9.45182 13.8058 10.0643C13.6597 10.3612 13.5972 10.6738 13.5696 10.9959C13.5386 11.3419 13.5329 11.6896 13.5526 12.0363C13.5753 12.409 13.5707 12.7816 13.5621 13.154C13.5542 13.4971 13.5377 13.8406 13.4976 14.1821C13.4795 14.3344 13.3717 14.4315 13.1955 14.4574C13.0623 14.477 12.9183 14.398 12.8617 14.2672C12.7937 14.1109 12.7937 13.9407 12.7743 13.7768C12.7163 13.3105 12.6626 12.8437 12.6157 12.3761C12.5956 12.1709 12.5686 11.9665 12.5455 11.7617C12.5342 11.6383 12.4857 11.5207 12.406 11.4234C12.2928 11.2878 12.1746 11.2943 12.0845 11.4437C11.9823 11.6128 11.9552 11.8048 11.916 11.9922C11.7258 12.9063 11.5885 13.8297 11.4164 14.7469C11.391 14.8819 11.3605 15.0164 11.2925 15.1387C11.1886 15.327 11.0434 15.3751 10.8065 15.2985C10.6417 15.2449 10.562 15.0895 10.5851 14.9067C10.6322 14.5336 10.6689 14.1592 10.7119 13.7857C10.7515 13.4407 10.7979 13.0966 10.8339 12.7514C10.8747 12.3596 10.9506 11.9719 10.9379 11.576C10.9364 11.5398 10.9287 11.504 10.9152 11.4702C10.8738 11.364 10.8041 11.3481 10.7171 11.4234C10.6265 11.5024 10.5701 11.6065 10.5096 11.7064C9.89956 12.7128 9.29423 13.7219 8.72943 14.7536C8.64994 14.8988 8.52064 14.9511 8.35577 14.9478C8.19566 14.9445 8.07043 14.8921 8.00068 14.7454C7.93093 14.5987 7.91145 14.4624 7.98165 14.3074C8.46651 13.2446 8.97062 12.1902 9.48083 11.1385C9.53971 11.017 9.6029 10.8958 9.56689 10.7552C9.53382 10.6257 9.45049 10.5861 9.32072 10.6363C9.24467 10.6689 9.17684 10.7168 9.12189 10.777C8.32339 11.5862 7.48502 12.3574 6.67859 13.1591C6.52007 13.3158 6.35589 13.3332 6.18694 13.2067C5.98177 13.0544 5.92538 12.8426 6.05243 12.6554C6.13667 12.5315 6.23745 12.4179 6.33188 12.3006C7.03006 11.433 7.73345 10.5693 8.38883 9.67079C8.71001 9.23708 8.96651 8.76233 9.15088 8.26034C9.18654 8.15737 9.2063 8.04994 9.20953 7.94146C9.21972 7.7177 9.08973 7.5649 8.849 7.51005C8.74266 7.4882 8.63359 7.48117 8.52516 7.48916Z"
        fill="currentColor"
      />
      <path
        d="M5.37089 0.666656L5.50677 0.667745C5.78011 0.753287 5.87477 0.956148 5.91848 1.20994C6.08017 2.14785 6.03659 2.2945 6.18605 3.23436C6.22446 3.47846 6.44321 4.33332 6.70033 4.33332C7.15581 4.33332 7.11978 4.043 7.16878 3.66666C7.27269 2.86841 7.18577 2.07302 7.32957 1.27717C7.36942 1.05711 7.49941 0.943925 7.71908 0.955025C7.96275 0.967432 8.14732 1.12502 8.14936 1.33332C8.15203 1.60625 8.17087 1.93541 8.14936 2.23796C8.0858 3.12652 8.14936 3.95021 8.23111 4.89849C8.23428 4.96248 8.18831 4.96836 8.14936 4.98381C7.82755 5.11115 7.49398 5.20104 7.16878 5.31357C6.87234 5.41631 6.48793 5.47857 6.18605 5.53124C5.74558 5.60851 5.05294 6.28243 5.05294 6.87499C4.96688 7.54662 5.56519 8.26697 5.90874 8.51467C6.26474 8.77129 6.67192 8.90102 7.11669 8.91364C7.30923 8.91364 7.30923 8.99999 7.30923 8.99999C7.30923 8.99999 6.71139 9.72447 6.31169 10.2538C6.15452 10.4617 5.98739 10.6626 5.82909 10.8698C5.78244 10.9308 5.73647 10.9584 5.65268 10.9499C5.54366 10.9499 5.41213 10.963 5.2597 10.9871C5.15235 11.0041 5.05905 10.9732 4.96688 10.9292C4.5511 10.7312 4.28251 10.4029 4.10632 10.0024C3.85721 9.43651 3.70775 8.84381 3.58342 8.24328C3.51548 7.91787 3.49873 7.58224 3.37779 7.2675C3.20523 6.81824 2.92962 6.42449 2.64564 6.03683C2.19475 5.42128 1.75632 4.79833 1.389 4.13185C1.2914 3.95467 1.32491 3.81036 1.47959 3.70414C1.62747 3.60227 1.79958 3.61838 1.93546 3.76226C2.10508 3.94183 2.26632 4.12858 2.42846 4.31447C2.8059 4.74747 3.18228 5.18105 3.55761 5.61522C3.64272 5.71838 3.76057 5.79198 3.89322 5.82483C4.05039 5.86248 4.12489 5.80654 4.12444 5.65244C4.12444 5.5312 4.08753 5.41715 4.04178 5.30592C3.72972 4.54541 3.36579 3.80666 3.0227 3.05942C2.89837 2.78887 2.75321 2.52593 2.67304 2.23796C2.66361 2.20314 2.65733 2.1676 2.65425 2.13174C2.63387 1.92039 2.70226 1.83268 2.94865 1.75083C3.10581 1.6986 3.23965 1.74517 3.33816 1.90516C3.56032 2.26648 3.74851 2.64521 3.94961 3.01807C4.2576 3.58965 4.56612 4.16087 4.87516 4.73173C4.91883 4.82033 4.9791 4.90046 5.05294 4.96811C5.09438 5.00337 5.14103 5.04494 5.20286 5.02426C5.26468 5.00359 5.276 4.94351 5.28438 4.89062C5.31178 4.71649 5.28325 4.54388 5.2717 4.37128C5.22535 3.67882 5.17515 2.98672 5.1211 2.29499C5.09211 1.92496 5.05316 1.55385 5.01693 1.18339C4.98772 0.89172 5.08011 0.757422 5.37089 0.666656Z"
        fill="currentColor"
      />
    </svg>
  </StyledButton>
)
