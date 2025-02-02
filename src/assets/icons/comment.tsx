import React from 'react'
import Svg, { Path } from 'react-native-svg'

const Comment = () => {
    return (
        <Svg width="28" height="24" viewBox="0 0 28 24" fill="none" >
            <Path d="M1.89395 0.145164L1.7767 0.29591V8.85496V17.4196H1.00063H0.218986L0.101738 17.5703C-0.0099257 17.7099 -0.0155089 17.7658 0.0179903 18.1454C0.0738223 18.754 0.285984 19.357 0.604227 19.8371C1.06205 20.5239 1.6762 20.9928 2.46902 21.2553L2.92126 21.4116L6.30468 21.4395L9.69368 21.4674L10.2632 22.1932C10.5758 22.5896 10.9164 23.0028 11.0113 23.1089C11.2681 23.388 11.793 23.7119 12.2117 23.8514C12.569 23.9743 12.6639 23.9743 15.651 23.9966C17.6442 24.0078 18.8892 23.991 19.1963 23.9519C20.1789 23.8291 21.0499 23.215 21.4519 22.3719C21.558 22.1486 21.6585 21.8806 21.6808 21.7745C21.759 21.3557 21.6027 21.3948 23.3446 21.3725C24.8856 21.3557 24.9302 21.3502 25.3266 21.205C26.661 20.7248 27.5543 19.6361 27.7442 18.2738C27.8558 17.4643 27.8 17.4196 26.7839 17.4196H26.0078V8.85496V0.29591L25.8906 0.145164L25.7789 1.90735e-06H13.8922H2.00561L1.89395 0.145164ZM25.0587 9.15645V17.4196H23.4116H21.7701L21.7534 15.5325C21.7366 13.7458 21.7311 13.6398 21.6194 13.3941C21.4519 13.0368 21.1281 12.6906 20.7931 12.5231C20.4023 12.3221 19.7825 12.283 19.3861 12.4338L19.1014 12.5455L19.04 12.311C18.9395 11.9313 18.6547 11.6131 18.2248 11.3897C17.8787 11.2111 17.7949 11.1943 17.3873 11.1943C17.0188 11.1999 16.8793 11.2222 16.6113 11.3451L16.293 11.4958L16.0418 11.2278C15.5225 10.6751 14.8023 10.5467 13.9927 10.8593C13.9034 10.8928 13.8978 10.77 13.8811 9.1732C13.8643 7.53732 13.8587 7.44241 13.7471 7.23025C13.574 6.91201 13.2613 6.61051 12.9264 6.43744C12.6807 6.30902 12.569 6.28669 12.1615 6.28669C11.726 6.28111 11.659 6.29785 11.3351 6.47093C10.9555 6.67751 10.721 6.92876 10.5256 7.35308L10.4027 7.62107L10.386 11.6856L10.3692 15.7558L10.1403 15.499C9.88351 15.2031 9.33077 14.7955 9.01811 14.6615C8.63845 14.5052 8.13597 14.4437 7.77306 14.5107C7.32082 14.5945 6.68992 14.9127 6.38842 15.2142C5.84685 15.7614 5.81335 16.6379 6.32143 17.2353L6.47776 17.4196H4.6018H2.72584V9.15645V0.893312H13.8922H25.0587V9.15645ZM12.6807 7.3475C12.7644 7.40333 12.8817 7.55408 12.9431 7.68249C13.0492 7.90023 13.0548 8.0119 13.0548 11.3451V14.7899L13.1999 14.9016C13.2837 14.9686 13.4177 15.0188 13.5014 15.0188C13.5852 15.0188 13.7192 14.9686 13.8029 14.9016L13.9481 14.7899V13.5504C13.9481 12.4505 13.9648 12.283 14.0597 12.0765C14.3166 11.507 15.1373 11.44 15.5002 11.9536C15.5784 12.0653 15.6007 12.2886 15.623 13.4444C15.651 14.7899 15.651 14.8067 15.785 14.9127C15.9524 15.0467 16.2428 15.0467 16.4103 14.9127C16.5387 14.8067 16.5443 14.7787 16.5722 13.6956C16.6057 12.4338 16.628 12.3556 17.0356 12.1658C17.3371 12.0318 17.4878 12.0318 17.7782 12.177C17.9512 12.2607 18.0462 12.3556 18.1299 12.5287C18.236 12.7409 18.2471 12.8693 18.2471 13.7738V14.7899L18.3923 14.9016C18.5933 15.0579 18.8669 15.0523 19.012 14.8904C19.107 14.7899 19.1349 14.6727 19.1516 14.2874C19.1684 13.9524 19.2075 13.757 19.2745 13.6565C19.5089 13.2936 20.0282 13.1819 20.4246 13.4053C20.8378 13.6398 20.8154 13.3941 20.8154 17.6373C20.8154 21.3502 20.8154 21.4451 20.6982 21.7466C20.5418 22.1597 20.2906 22.4836 19.9221 22.7348C19.3638 23.1145 19.308 23.12 15.8073 23.1033L12.6863 23.0865L12.2675 22.88C12.0442 22.7683 11.7874 22.6064 11.7036 22.5171C11.3128 22.1039 6.96908 16.4314 6.94116 16.2918C6.88533 16.0405 7.06399 15.8005 7.46598 15.5939C8.34254 15.1361 9.06278 15.4934 10.0789 16.8613C10.2911 17.1516 10.5256 17.4419 10.5926 17.4978C10.7545 17.6485 11.0783 17.6373 11.2346 17.481L11.3519 17.3582L11.3798 12.5455C11.4133 7.18558 11.3798 7.56524 11.7874 7.30841C12.0107 7.16883 12.4629 7.18558 12.6807 7.3475ZM8.01872 19.3514C8.47096 19.9209 8.85062 20.4122 8.8562 20.4401C8.86737 20.468 7.72281 20.4904 6.0311 20.4904C3.35116 20.4904 3.16133 20.4848 2.82634 20.3787C2.3741 20.2391 1.87161 19.9209 1.56454 19.5691C1.33004 19.3011 1.03413 18.754 0.972718 18.4637L0.939219 18.3129H4.06581H7.19241L8.01872 19.3514ZM26.8453 18.3297C26.8453 18.3408 26.795 18.4916 26.7392 18.6646C26.4991 19.3625 25.991 19.9209 25.282 20.2614L24.8632 20.4624L23.3446 20.4792L21.8204 20.4959V19.4072V18.3129H24.3328C25.7175 18.3129 26.8453 18.3241 26.8453 18.3297Z" fill="white" />
            <Path d="M11.7426 2.59738C11.6086 2.73138 11.603 2.75371 11.603 3.60236C11.603 4.451 11.6086 4.47334 11.7426 4.60733C11.9101 4.78041 12.206 4.79158 12.3903 4.64083C12.5187 4.53475 12.5243 4.51242 12.5243 3.60236C12.5243 2.69229 12.5187 2.66996 12.3903 2.56388C12.206 2.41313 11.9101 2.4243 11.7426 2.59738Z" fill="white" />
            <Path d="M9.26928 2.97744C9.05712 3.20635 9.10737 3.40735 9.57077 4.19458C9.80527 4.59099 10.0398 4.94273 10.0956 4.97065C10.2352 5.04881 10.4976 5.03764 10.6037 4.9539C10.7209 4.86456 10.8214 4.66915 10.8214 4.54074C10.8214 4.41232 10.0174 3.01652 9.88901 2.91603C9.73268 2.79878 9.40328 2.83228 9.26928 2.97744Z" fill="white" />
            <Path d="M14.2105 2.91541C14.0486 3.03824 13.334 4.40054 13.334 4.58479C13.334 4.94769 13.8532 5.17661 14.1045 4.92536C14.1603 4.86953 14.378 4.51779 14.579 4.1493C14.9978 3.40115 15.0424 3.17782 14.8247 2.97124C14.6795 2.83166 14.3613 2.80374 14.2105 2.91541Z" fill="white" />
            <Path d="M16.9463 3.63946C16.7173 3.80696 16.7508 4.33736 16.9909 4.43228C17.1193 4.48253 23.6182 4.47136 23.6964 4.42111C23.9141 4.27595 23.942 3.90187 23.7466 3.71205L23.6126 3.57247H20.3241C17.7837 3.57247 17.0188 3.58922 16.9463 3.63946Z" fill="white" />
            <Path d="M4.90343 6.629C4.70802 6.70158 4.62427 6.83558 4.62427 7.07007C4.62427 7.2599 4.65218 7.33248 4.76943 7.42182C4.91459 7.53348 4.98159 7.53906 6.57839 7.53906C8.17518 7.53906 8.24218 7.53348 8.38735 7.42182C8.57717 7.27107 8.59392 6.88583 8.41526 6.72391C8.3036 6.62342 8.18077 6.61783 6.6398 6.60667C5.72974 6.60108 4.94809 6.61225 4.90343 6.629Z" fill="white" />
            <Path d="M17.8732 6.64242C17.6219 6.74291 17.5494 7.1449 17.7392 7.37382L17.8453 7.50781H20.7597H23.6741L23.7802 7.37382C23.9365 7.1784 23.9142 6.94391 23.7244 6.7485L23.5625 6.58658L20.7764 6.59217C19.2466 6.59217 17.9402 6.6145 17.8732 6.64242Z" fill="white" />
            <Path d="M4.719 9.75797C4.585 9.90871 4.59616 10.2995 4.73574 10.4391C4.84183 10.5452 4.91999 10.5508 6.56704 10.5508C8.21966 10.5508 8.29224 10.5452 8.40949 10.4391C8.5714 10.2884 8.57699 9.92546 8.42066 9.76913C8.31458 9.66305 8.23641 9.65747 6.56145 9.65747C4.93674 9.65747 4.80274 9.66305 4.719 9.75797Z" fill="white" />
            <Path d="M19.481 9.80263C19.3247 10.0036 19.3302 10.2437 19.5033 10.4112L19.6373 10.5508H21.6249H23.6126L23.7466 10.4112C23.9196 10.2437 23.9252 10.0036 23.7689 9.80263L23.6572 9.65747H21.6249H19.5927L19.481 9.80263Z" fill="white" />
            <Path d="M18.9448 18.0336C18.7606 18.1061 18.7103 18.2066 18.6489 18.631C18.4982 19.675 17.817 20.3562 16.8065 20.4846C16.2984 20.546 16.1812 20.6409 16.1812 20.9703C16.1812 21.1601 16.2091 21.2327 16.3263 21.3221C16.505 21.4616 16.7283 21.4672 17.2587 21.3556C18.5373 21.0876 19.5869 19.8369 19.5869 18.5863C19.5869 18.2401 19.5478 18.1564 19.358 18.0615C19.1849 17.9666 19.1068 17.961 18.9448 18.0336Z" fill="white" />
        </Svg>

    )
}

export default Comment