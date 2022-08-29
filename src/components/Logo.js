import React from 'react'

function Logo({ width = 106, height = 60 }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 106 60"
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M22.4041 2.55C22.0041 2.31666 21.4874 2.16666 20.8541 2.1C20.2208 2.03333 19.5541 2.01667 18.8541 2.05C18.1541 2.08333 17.4541 2.15 16.7541 2.25C16.0874 2.31667 15.5374 2.36666 15.1041 2.4C15.0041 6.26666 14.9374 10.2667 14.9041 14.4C14.9041 18.5333 14.8208 22.6 14.6541 26.6C14.4874 27.3667 14.1208 27.9667 13.5541 28.4C12.9874 28.8333 12.3708 29.0667 11.7041 29.1C11.0374 29.1333 10.3874 28.9667 9.7541 28.6C9.1541 28.2333 8.73744 27.65 8.5041 26.85C7.83744 18.55 7.68744 10.3667 8.0541 2.3V2.25C7.5541 2.11667 7.0041 2.03333 6.4041 2C5.8041 1.93333 5.18744 1.9 4.5541 1.9C3.92077 1.9 3.28743 1.91666 2.6541 1.95C2.0541 1.98333 1.5041 2 1.0041 2H0.954102L1.0041 2.05C1.07077 6.45 1.0541 10.8833 0.954102 15.35C0.854102 19.8167 0.804102 24.25 0.804102 28.65C0.870768 30.1833 1.3041 31.5 2.1041 32.6C2.93744 33.6667 3.9541 34.5333 5.1541 35.2C6.38744 35.8333 7.7541 36.2667 9.2541 36.5C10.7541 36.7667 12.2041 36.8333 13.6041 36.7C16.0041 36.4667 17.9041 35.5833 19.3041 34.05C20.7041 32.5167 21.5374 30.65 21.8041 28.45C22.2708 24.15 22.5374 19.8333 22.6041 15.5C22.6708 11.1333 22.6041 6.81667 22.4041 2.55ZM36.3482 18.6C36.2816 18.6333 36.2482 18.65 36.2482 18.65C36.2149 18.65 36.1982 18.6667 36.1982 18.7V18.75C36.2649 19.35 36.2982 19.85 36.2982 20.25C36.2982 20.65 36.2816 21.05 36.2482 21.45C36.2482 21.8167 36.2482 22.2 36.2482 22.6C36.2816 23 36.3316 23.4667 36.3982 24C36.5649 24.0667 36.7982 24.1167 37.0982 24.15C37.4316 24.15 37.7816 24.15 38.1482 24.15C38.5482 24.1167 38.9149 24.1 39.2482 24.1C39.6149 24.0667 39.8982 24.0667 40.0982 24.1C40.1982 24.1333 40.2482 24.2833 40.2482 24.55C40.2816 24.8167 40.2816 25.1167 40.2482 25.45C40.2482 25.7833 40.2149 26.1167 40.1482 26.45C40.1149 26.75 40.0816 26.9667 40.0482 27.1C39.9149 27.5667 39.7149 27.95 39.4482 28.25C39.1816 28.5167 38.8649 28.7333 38.4982 28.9C38.0316 29.0667 37.5149 29.2 36.9482 29.3C36.4149 29.4 35.8982 29.4167 35.3982 29.35C34.9316 29.25 34.5482 29.1 34.2482 28.9C33.6149 28.4 33.1982 27.7167 32.9982 26.85C32.7982 25.9833 32.6649 25.1833 32.5982 24.45C32.4982 23.2167 32.4316 21.9167 32.3982 20.55C32.3649 19.1833 32.3816 17.8667 32.4482 16.6C32.5149 15.3 32.6149 14.0833 32.7482 12.95C32.9149 11.8167 33.1149 10.85 33.3482 10.05C33.4149 9.78333 33.4982 9.51667 33.5982 9.25C33.7316 8.95 33.8316 8.76667 33.8982 8.7C34.2982 8.3 34.7649 8.1 35.2982 8.1C35.8316 8.1 36.3816 8.11667 36.9482 8.15C37.4482 8.15 37.8816 8.31666 38.2482 8.65C38.6149 8.95 38.9316 9.31666 39.1982 9.75C39.4982 10.15 39.7316 10.6 39.8982 11.1C40.0982 11.5667 40.2482 11.9667 40.3482 12.3C40.8482 12.3667 41.2816 12.4167 41.6482 12.45C42.0149 12.4833 42.3649 12.5 42.6982 12.5C43.0649 12.5 43.4149 12.5 43.7482 12.5C44.1149 12.4667 44.5482 12.45 45.0482 12.45C45.5816 12.4167 45.9649 12.4 46.1982 12.4C46.4316 12.4 46.5816 12.35 46.6482 12.25L46.6982 11.95C46.9316 9.91666 46.7482 8.16666 46.1482 6.7C45.5482 5.2 44.6482 4 43.4482 3.1C42.2482 2.2 40.8149 1.58333 39.1482 1.25C37.4816 0.883331 35.7316 0.816665 33.8982 1.05C32.9982 1.18333 32.1316 1.38333 31.2982 1.65C30.4649 1.91667 29.7149 2.33333 29.0482 2.9C28.0816 3.56667 27.3816 4.41667 26.9482 5.45C26.5482 6.48333 26.2649 7.55 26.0982 8.65C25.9316 9.71666 25.8149 10.8167 25.7482 11.95C25.6816 13.05 25.6316 14.1333 25.5982 15.2C25.5649 16.4333 25.5482 17.5333 25.5482 18.5C25.5816 19.4333 25.6149 20.3333 25.6482 21.2C25.7149 22.0333 25.7816 22.8833 25.8482 23.75C25.9149 24.6167 25.9982 25.5833 26.0982 26.65C26.1649 27.3167 26.2482 27.9833 26.3482 28.65C26.4816 29.2833 26.5982 29.7833 26.6982 30.15C27.0982 31.5833 27.6482 32.7833 28.3482 33.75C29.0482 34.7167 30.0649 35.4833 31.3982 36.05C32.1982 36.3833 33.0316 36.6 33.8982 36.7C34.7982 36.8 35.7149 36.8 36.6482 36.7C37.5816 36.6333 38.4982 36.5 39.3982 36.3C40.2982 36.1333 41.1649 35.9333 41.9982 35.7C43.2649 35.2333 44.3316 34.55 45.1982 33.65C46.0649 32.75 46.5816 31.45 46.7482 29.75C47.0816 27.95 47.2149 26.0667 47.1482 24.1C47.0816 22.1 46.9482 20.2167 46.7482 18.45L46.6982 18.4H46.5982C46.2649 18.4 45.6149 18.3667 44.6482 18.3C43.7149 18.2 42.6982 18.1333 41.5982 18.1C40.4982 18.0667 39.4482 18.0833 38.4482 18.15C37.4816 18.1833 36.7816 18.3333 36.3482 18.6ZM71.1205 31.45C71.0872 31.1833 71.0705 30.8833 71.0705 30.55C71.1038 30.1833 71.1372 29.8333 71.1705 29.5C71.2038 29.1333 71.2205 28.7667 71.2205 28.4C70.9538 28.4333 70.4705 28.45 69.7705 28.45C69.1038 28.4167 68.3205 28.3833 67.4205 28.35C66.5538 28.3167 65.6205 28.2833 64.6205 28.25C63.6538 28.1833 62.7372 28.1333 61.8705 28.1C61.0038 28.0667 60.2372 28.05 59.5705 28.05C58.9372 28.0167 58.5038 28.0333 58.2705 28.1V28.05C58.3038 25.9167 58.3038 23.7167 58.2705 21.45C58.2705 19.15 58.2538 16.85 58.2205 14.55C58.1872 12.25 58.1538 9.96667 58.1205 7.7C58.1205 5.4 58.1538 3.16666 58.2205 0.999998C57.7538 0.799998 57.1372 0.649998 56.3705 0.549997C55.6038 0.449999 54.8205 0.399999 54.0205 0.399999C53.2205 0.399999 52.4705 0.449999 51.7705 0.549997C51.0705 0.616665 50.5538 0.716666 50.2205 0.85C50.2538 3.18333 50.2872 5.31667 50.3205 7.25C50.3538 9.15 50.3872 10.95 50.4205 12.65C50.4538 14.35 50.4705 16.0167 50.4705 17.65C50.4705 19.2833 50.4538 20.9833 50.4205 22.75C50.4205 24.4833 50.3872 26.3667 50.3205 28.4C50.2538 30.4 50.1705 32.65 50.0705 35.15V36.05C54.1038 36.1167 57.3205 36.15 59.7205 36.15C62.1538 36.15 64.0538 36.1333 65.4205 36.1C66.8205 36.0667 67.8038 36.0333 68.3705 36C68.9705 35.9667 69.4538 35.9667 69.8205 36C70.1872 36 70.4705 36 70.6705 36C70.8705 35.9667 71.0038 35.8167 71.0705 35.55C71.1705 35.25 71.2205 34.8 71.2205 34.2C71.2205 33.5667 71.1872 32.65 71.1205 31.45ZM93.8174 1.35C93.6174 1.31667 93.3507 1.3 93.0174 1.3C92.6841 1.26666 92.3174 1.25 91.9174 1.25C91.0507 1.25 90.1007 1.28333 89.0674 1.35C88.0674 1.38333 87.2674 1.46667 86.6674 1.6C86.3674 2.26666 86.0507 3.1 85.7174 4.1C85.3841 5.1 85.0341 6.11666 84.6674 7.15C84.334 8.18333 83.984 9.18333 83.6174 10.15C83.2841 11.0833 82.9507 11.85 82.6174 12.45C82.3174 11.8167 81.9674 11.0333 81.5674 10.1C81.2007 9.16667 80.834 8.18333 80.4674 7.15C80.134 6.11666 79.8007 5.1 79.4674 4.1C79.1674 3.1 78.9341 2.23333 78.7674 1.5C78.4007 1.33333 78.0174 1.23333 77.6174 1.2C77.2174 1.13333 76.8174 1.1 76.4174 1.1C75.684 1.1 74.9507 1.15 74.2174 1.25C73.484 1.35 72.784 1.4 72.1174 1.4C72.4507 2.8 72.9007 4.21666 73.4674 5.65C74.034 7.08333 74.6174 8.51667 75.2174 9.95C75.8507 11.3833 76.4507 12.8333 77.0174 14.3C77.5841 15.7333 78.0507 17.1833 78.4174 18.65V18.75C77.2507 21.6833 76.084 24.6333 74.9174 27.6C73.7507 30.5333 72.734 33.35 71.8674 36.05H71.9674C72.1674 36.0833 72.3674 36.1 72.5674 36.1C72.7674 36.1 72.9674 36.1 73.1674 36.1C73.934 36.1 74.734 36.0667 75.5674 36C76.4007 35.9667 77.1674 35.95 77.8674 35.95C78.1007 35.95 78.3174 35.95 78.5174 35.95C78.7174 35.95 78.9174 35.9667 79.1174 36C80.1174 33.0667 81.2674 30.1833 82.5674 27.35C83.8674 24.4833 85.2007 21.6333 86.5674 18.8C87.9341 15.9333 89.2507 13.0667 90.5174 10.2C91.7841 7.33333 92.8841 4.4 93.8174 1.4V1.35ZM11.0331 41.275C10.8331 41.1583 10.5748 41.0833 10.2581 41.05C9.94144 41.0167 9.60811 41.0083 9.25811 41.025C8.90811 41.0417 8.55811 41.075 8.20811 41.125C7.87477 41.1583 7.59977 41.1833 7.38311 41.2C7.33311 43.1333 7.29977 45.1333 7.28311 47.2C7.28311 49.2667 7.24144 51.3 7.15811 53.3C7.07477 53.6833 6.89144 53.9833 6.60811 54.2C6.32477 54.4167 6.01644 54.5333 5.68311 54.55C5.34977 54.5667 5.02477 54.4833 4.70811 54.3C4.40811 54.1167 4.19977 53.825 4.08311 53.425C3.74977 49.275 3.67477 45.1833 3.85811 41.15V41.125C3.60811 41.0583 3.33311 41.0167 3.03311 41C2.73311 40.9667 2.42477 40.95 2.10811 40.95C1.79144 40.95 1.47477 40.9583 1.15811 40.975C0.858106 40.9917 0.583106 41 0.333105 41H0.308106L0.333105 41.025C0.366439 43.225 0.358106 45.4417 0.308106 47.675C0.258106 49.9083 0.233105 52.125 0.233105 54.325C0.266439 55.0917 0.483105 55.75 0.883105 56.3C1.29977 56.8333 1.80811 57.2667 2.40811 57.6C3.02477 57.9167 3.70811 58.1333 4.45811 58.25C5.20811 58.3833 5.93311 58.4167 6.63311 58.35C7.83311 58.2333 8.78311 57.7917 9.48311 57.025C10.1831 56.2583 10.5998 55.325 10.7331 54.225C10.9664 52.075 11.0998 49.9167 11.1331 47.75C11.1664 45.5667 11.1331 43.4083 11.0331 41.275ZM22.5302 58.125C22.8135 58.125 23.0135 58.1083 23.1302 58.075C23.2468 58.0417 23.3218 58.0167 23.3552 58V57.5C23.3552 57.1667 23.3468 56.8333 23.3302 56.5C23.3302 56.1667 23.3302 55.8333 23.3302 55.5C23.3302 55.0333 23.3302 54.575 23.3302 54.125C23.3468 53.675 23.3552 53.2083 23.3552 52.725C23.3552 52.0083 23.3552 51.2917 23.3552 50.575C23.3552 49.8583 23.3468 49.15 23.3302 48.45V40.4C22.8468 40.3 22.2968 40.25 21.6802 40.25C21.0468 40.25 20.4468 40.3 19.8802 40.4C19.8635 40.8167 19.8468 41.2083 19.8302 41.575C19.8302 41.925 19.8302 42.275 19.8302 42.625C19.8302 43.225 19.8385 43.8167 19.8552 44.4C19.8885 44.9667 19.9052 45.5833 19.9052 46.25C19.9052 46.5333 19.8885 46.825 19.8552 47.125C19.8218 47.425 19.7802 47.5917 19.7302 47.625C19.7135 47.625 19.6552 47.5333 19.5552 47.35C19.4552 47.15 19.3302 46.9167 19.1802 46.65C19.0468 46.3667 18.8968 46.0583 18.7302 45.725C18.5635 45.375 18.4052 45.05 18.2552 44.75C18.1052 44.4333 17.9718 44.1583 17.8552 43.925C17.7385 43.6917 17.6635 43.5333 17.6302 43.45C17.4802 43.1 17.3468 42.8167 17.2302 42.6C17.1302 42.3667 17.0302 42.1583 16.9302 41.975C16.8468 41.7917 16.7552 41.6 16.6552 41.4C16.5552 41.2 16.4468 40.95 16.3302 40.65C16.3302 40.6167 16.2385 40.5833 16.0552 40.55C15.8885 40.5167 15.6885 40.4917 15.4552 40.475C15.2218 40.4417 14.9885 40.425 14.7552 40.425C14.5218 40.4083 14.3552 40.4 14.2552 40.4C14.0552 40.4 13.8552 40.4083 13.6552 40.425C13.4718 40.4417 13.2968 40.4667 13.1302 40.5C13.0468 41.5667 12.9885 42.6667 12.9552 43.8C12.9218 44.9167 12.9052 46.05 12.9052 47.2C12.9052 48.7667 12.9135 50.2667 12.9302 51.7C12.9635 53.1333 12.9802 54.6417 12.9802 56.225V57.975C13.3635 57.975 13.7552 58 14.1552 58.05C14.5718 58.1 14.9802 58.125 15.3802 58.125C15.5635 58.125 15.7468 58.1167 15.9302 58.1C16.1135 58.0833 16.2968 58.05 16.4802 58C16.4635 57.7167 16.4552 57.4 16.4552 57.05C16.4552 56.6833 16.4552 56.3083 16.4552 55.925C16.4552 55.225 16.4552 54.5 16.4552 53.75C16.4718 53 16.4885 52.3167 16.5052 51.7C16.5218 51.0833 16.5385 50.575 16.5552 50.175C16.5885 49.775 16.6135 49.575 16.6302 49.575C16.6635 49.575 16.7052 49.6583 16.7552 49.825C16.8218 49.975 16.8885 50.1417 16.9552 50.325L17.2052 51.075C17.5885 52.1417 18.0468 53.2583 18.5802 54.425C19.1302 55.575 19.6802 56.7667 20.2302 58C20.5635 58 20.9468 58.0167 21.3802 58.05C21.8135 58.1 22.1968 58.125 22.5302 58.125ZM29.3313 40.425C28.5813 40.4417 28.0063 40.4417 27.6063 40.425C27.223 40.3917 26.8813 40.3667 26.5813 40.35C26.4647 40.35 26.2813 40.3417 26.0313 40.325C25.798 40.2917 25.6397 40.2833 25.5563 40.3V40.35C25.4063 41.75 25.3313 43.1833 25.3313 44.65C25.348 46.1 25.373 47.575 25.4063 49.075C25.4563 50.5583 25.4897 52.0583 25.5063 53.575C25.523 55.0917 25.473 56.6 25.3563 58.1C25.523 58.05 25.8313 58.0333 26.2813 58.05C26.7313 58.0833 27.198 58.1083 27.6813 58.125C28.1813 58.1417 28.6397 58.1333 29.0563 58.1C29.4897 58.0833 29.773 58.0083 29.9063 57.875C29.823 56.4583 29.773 55.025 29.7563 53.575C29.7397 52.125 29.7397 50.675 29.7563 49.225C29.7897 47.7583 29.823 46.3 29.8563 44.85C29.9063 43.4 29.9313 41.9583 29.9313 40.525V40.425H29.3313ZM35.7005 44.45C35.8338 44.3167 36.0172 44.225 36.2505 44.175C36.5005 44.125 36.7338 44.0833 36.9505 44.05C37.4338 44.0333 37.7838 44.1333 38.0005 44.35C38.2338 44.5667 38.3922 44.85 38.4755 45.2C38.5588 45.5333 38.6005 45.9 38.6005 46.3C38.6172 46.7 38.6505 47.0583 38.7005 47.375C39.3338 47.4917 39.9422 47.575 40.5255 47.625C41.1255 47.6583 41.7338 47.6083 42.3505 47.475C42.6172 46.7083 42.7172 45.9583 42.6505 45.225C42.5838 44.4917 42.3922 43.8167 42.0755 43.2C41.7588 42.5667 41.3338 42.0083 40.8005 41.525C40.2672 41.0417 39.6672 40.6583 39.0005 40.375C38.3505 40.075 37.6505 39.9 36.9005 39.85C36.1505 39.8 35.3922 39.9 34.6255 40.15C34.3922 40.2167 34.1672 40.3 33.9505 40.4C33.7338 40.4833 33.5338 40.5917 33.3505 40.725C33.0338 41.0083 32.7588 41.3333 32.5255 41.7C32.3088 42.0667 32.1255 42.4667 31.9755 42.9C31.8755 43.15 31.7922 43.425 31.7255 43.725C31.6755 44.0083 31.6672 44.2917 31.7005 44.575C31.6838 45.925 31.6672 47.1167 31.6505 48.15C31.6505 49.1667 31.6505 50.0833 31.6505 50.9C31.6672 51.7 31.6838 52.425 31.7005 53.075C31.7172 53.725 31.7422 54.35 31.7755 54.95C31.8422 55.65 32.0588 56.2333 32.4255 56.7C32.8088 57.1667 33.2755 57.5333 33.8255 57.8C34.3755 58.05 34.9672 58.2083 35.6005 58.275C36.2338 58.3583 36.8505 58.3583 37.4505 58.275C38.3672 58.2583 39.1838 58.0333 39.9005 57.6C40.6338 57.15 41.2255 56.5833 41.6755 55.9C42.1255 55.2167 42.4172 54.45 42.5505 53.6C42.6838 52.7333 42.6088 51.8667 42.3255 51C42.0922 50.9333 41.8255 50.8917 41.5255 50.875C41.2422 50.8583 40.9505 50.85 40.6505 50.85C40.3505 50.85 40.0505 50.8583 39.7505 50.875C39.4672 50.8917 39.2088 50.8833 38.9755 50.85C38.8922 51.2667 38.8588 51.6917 38.8755 52.125C38.9088 52.5417 38.8338 52.9417 38.6505 53.325C38.4838 53.6583 38.2338 53.9 37.9005 54.05C37.5838 54.1833 37.2422 54.2333 36.8755 54.2C36.3922 54.0667 36.0422 53.775 35.8255 53.325C35.6255 52.8583 35.5005 52.3833 35.4505 51.9C35.4005 51.3167 35.3755 50.6333 35.3755 49.85C35.3755 49.05 35.3838 48.2833 35.4005 47.55C35.4172 46.8167 35.4338 46.1833 35.4505 45.65C35.4838 45.1167 35.5172 44.825 35.5505 44.775C35.5672 44.7417 35.5838 44.6917 35.6005 44.625C35.6338 44.5417 35.6672 44.4833 35.7005 44.45ZM54.0075 43.2C53.8075 42.6167 53.4659 42.1083 52.9825 41.675C52.4992 41.3083 51.9492 41.0333 51.3325 40.85C50.7325 40.65 50.1075 40.5333 49.4575 40.5C48.8242 40.4667 48.1825 40.5167 47.5325 40.65C46.8992 40.7667 46.3075 40.9583 45.7575 41.225C45.5409 41.3583 45.3492 41.5083 45.1825 41.675C44.6659 42.2583 44.3159 42.9333 44.1325 43.7C43.9659 44.45 43.8742 45.2 43.8575 45.95C43.7742 47.2667 43.7575 48.5833 43.8075 49.9C43.8742 51.2 43.9325 52.5 43.9825 53.8C43.9992 54.2833 44.0409 54.7667 44.1075 55.25C44.1909 55.7167 44.3492 56.1583 44.5825 56.575C44.7325 56.9083 44.9242 57.1833 45.1575 57.4C45.3909 57.6 45.6492 57.7667 45.9325 57.9C46.2325 58.0333 46.5409 58.125 46.8575 58.175C47.1909 58.2417 47.5325 58.2917 47.8825 58.325C48.3659 58.3583 48.8409 58.3583 49.3075 58.325C49.7909 58.2917 50.2659 58.2083 50.7325 58.075C51.2492 57.9417 51.7325 57.7583 52.1825 57.525C52.6492 57.275 53.0242 56.95 53.3075 56.55C53.6075 56.0667 53.8325 55.5333 53.9825 54.95C54.1325 54.35 54.2242 53.7583 54.2575 53.175L54.3325 52.35C54.3992 51.4833 54.4242 50.6333 54.4075 49.8C54.3909 48.9667 54.4075 48.1083 54.4575 47.225C54.4742 46.8083 54.4742 46.4 54.4575 46C54.4575 45.5833 54.4409 45.1667 54.4075 44.75C54.3742 44.4833 54.3242 44.225 54.2575 43.975C54.2075 43.7083 54.1242 43.45 54.0075 43.2ZM51.3325 50.5C51.3325 50.5333 51.3242 50.675 51.3075 50.925C51.3075 51.175 51.2992 51.4667 51.2825 51.8C51.2492 52.15 51.2325 52.4333 51.2325 52.65C51.2492 52.85 51.2492 53.025 51.2325 53.175C51.2159 53.325 51.1742 53.4667 51.1075 53.6C51.0409 53.7167 50.9325 53.875 50.7825 54.075C50.5325 54.3583 50.2242 54.5667 49.8575 54.7C49.4909 54.8167 49.1242 54.8667 48.7575 54.85C48.3909 54.8167 48.0492 54.7083 47.7325 54.525C47.4159 54.3417 47.1742 54.0833 47.0075 53.75C46.8409 53.2 46.7409 52.625 46.7075 52.025C46.6742 51.4083 46.6159 50.8083 46.5325 50.225C46.4992 49.525 46.4909 48.825 46.5075 48.125C46.5409 47.425 46.6242 46.7583 46.7575 46.125C46.9575 45.425 47.3492 44.85 47.9325 44.4C48.1992 44.2 48.5075 44.0583 48.8575 43.975C49.2075 43.8917 49.5492 43.9167 49.8825 44.05C50.2659 44.2333 50.5659 44.5167 50.7825 44.9C51.0159 45.2833 51.1492 45.7083 51.1825 46.175C51.1992 46.4583 51.2159 46.7667 51.2325 47.1C51.2659 47.4167 51.2825 47.5833 51.2825 47.6L51.3325 49.3V50.5ZM68.0675 57.925C67.8175 57.2417 67.5091 56.5833 67.1425 55.95C66.7758 55.3 66.3925 54.6667 65.9925 54.05C65.5925 53.4333 65.1841 52.825 64.7675 52.225C64.3508 51.6083 63.9675 50.9917 63.6175 50.375V50.35H63.6425H63.7425C64.5425 50.3 65.2008 50.075 65.7175 49.675C66.2508 49.275 66.6758 48.775 66.9925 48.175C67.5091 47.3083 67.7508 46.4167 67.7175 45.5C67.7008 44.5667 67.4758 43.7167 67.0425 42.95C66.6091 42.1833 66.0008 41.5417 65.2175 41.025C64.4341 40.5083 63.5508 40.225 62.5675 40.175C61.3508 40.0417 60.1841 40.0333 59.0675 40.15C57.9508 40.2667 56.9258 40.3917 55.9925 40.525C56.0258 40.7417 56.0508 41.1583 56.0675 41.775C56.1008 42.375 56.1258 43.1083 56.1425 43.975C56.1591 44.825 56.1758 45.7667 56.1925 46.8C56.2258 47.8167 56.2425 48.85 56.2425 49.9C56.2591 50.9333 56.2675 51.9417 56.2675 52.925C56.2675 53.8917 56.2675 54.75 56.2675 55.5C56.2675 56.25 56.2591 56.8583 56.2425 57.325C56.2258 57.775 56.2008 58 56.1675 58C56.2508 57.9833 56.4675 57.9833 56.8175 58C57.1841 58.0167 57.5925 58.0167 58.0425 58C58.4925 58 58.9425 57.9833 59.3925 57.95C59.8591 57.9167 60.2341 57.8417 60.5175 57.725C60.5008 57.4083 60.4758 56.9833 60.4425 56.45C60.4091 55.9167 60.3758 55.3583 60.3425 54.775C60.3258 54.175 60.3175 53.6 60.3175 53.05C60.3175 52.4833 60.3425 52.0083 60.3925 51.625L60.4425 51.7C60.7925 52.1333 61.1425 52.6333 61.4925 53.2C61.8425 53.7667 62.1675 54.3417 62.4675 54.925C62.7675 55.5083 63.0425 56.0667 63.2925 56.6C63.5425 57.1333 63.7508 57.5917 63.9175 57.975H63.9425C64.6925 58.025 65.4258 58.0333 66.1425 58C66.8591 57.95 67.5091 57.925 68.0925 57.925H68.0675ZM59.6425 44.025C60.2258 43.7917 60.8008 43.6667 61.3675 43.65C61.9341 43.6167 62.4008 43.7667 62.7675 44.1C63.0008 44.2833 63.1675 44.5333 63.2675 44.85C63.3675 45.15 63.4008 45.4583 63.3675 45.775C63.3341 46.075 63.2258 46.3583 63.0425 46.625C62.8758 46.875 62.6341 47.0333 62.3175 47.1C61.9175 47.1667 61.4925 47.1917 61.0425 47.175C60.5925 47.1583 60.1758 47.1333 59.7925 47.1H59.7675C59.7341 46.9167 59.7091 46.6917 59.6925 46.425C59.6925 46.1583 59.6925 45.8833 59.6925 45.6C59.6925 45.3167 59.6841 45.0417 59.6675 44.775C59.6675 44.4917 59.6591 44.2417 59.6425 44.025ZM78.7069 58.125C78.9903 58.125 79.1903 58.1083 79.3069 58.075C79.4236 58.0417 79.4986 58.0167 79.5319 58V57.5C79.5319 57.1667 79.5236 56.8333 79.5069 56.5C79.5069 56.1667 79.5069 55.8333 79.5069 55.5C79.5069 55.0333 79.5069 54.575 79.5069 54.125C79.5236 53.675 79.5319 53.2083 79.5319 52.725C79.5319 52.0083 79.5319 51.2917 79.5319 50.575C79.5319 49.8583 79.5236 49.15 79.5069 48.45V40.4C79.0236 40.3 78.4736 40.25 77.8569 40.25C77.2236 40.25 76.6236 40.3 76.0569 40.4C76.0403 40.8167 76.0236 41.2083 76.0069 41.575C76.0069 41.925 76.0069 42.275 76.0069 42.625C76.0069 43.225 76.0153 43.8167 76.0319 44.4C76.0653 44.9667 76.0819 45.5833 76.0819 46.25C76.0819 46.5333 76.0653 46.825 76.0319 47.125C75.9986 47.425 75.9569 47.5917 75.9069 47.625C75.8903 47.625 75.8319 47.5333 75.7319 47.35C75.6319 47.15 75.5069 46.9167 75.3569 46.65C75.2236 46.3667 75.0736 46.0583 74.9069 45.725C74.7403 45.375 74.5819 45.05 74.4319 44.75C74.2819 44.4333 74.1486 44.1583 74.0319 43.925C73.9153 43.6917 73.8403 43.5333 73.8069 43.45C73.6569 43.1 73.5236 42.8167 73.4069 42.6C73.3069 42.3667 73.2069 42.1583 73.1069 41.975C73.0236 41.7917 72.9319 41.6 72.8319 41.4C72.7319 41.2 72.6236 40.95 72.5069 40.65C72.5069 40.6167 72.4153 40.5833 72.2319 40.55C72.0653 40.5167 71.8653 40.4917 71.6319 40.475C71.3986 40.4417 71.1653 40.425 70.9319 40.425C70.6986 40.4083 70.5319 40.4 70.4319 40.4C70.2319 40.4 70.0319 40.4083 69.8319 40.425C69.6486 40.4417 69.4736 40.4667 69.3069 40.5C69.2236 41.5667 69.1653 42.6667 69.1319 43.8C69.0986 44.9167 69.0819 46.05 69.0819 47.2C69.0819 48.7667 69.0903 50.2667 69.1069 51.7C69.1403 53.1333 69.1569 54.6417 69.1569 56.225V57.975C69.5403 57.975 69.9319 58 70.3319 58.05C70.7486 58.1 71.1569 58.125 71.5569 58.125C71.7403 58.125 71.9236 58.1167 72.1069 58.1C72.2903 58.0833 72.4736 58.05 72.6569 58C72.6403 57.7167 72.6319 57.4 72.6319 57.05C72.6319 56.6833 72.6319 56.3083 72.6319 55.925C72.6319 55.225 72.6319 54.5 72.6319 53.75C72.6486 53 72.6653 52.3167 72.6819 51.7C72.6986 51.0833 72.7153 50.575 72.7319 50.175C72.7653 49.775 72.7903 49.575 72.8069 49.575C72.8403 49.575 72.8819 49.6583 72.9319 49.825C72.9986 49.975 73.0653 50.1417 73.1319 50.325L73.3819 51.075C73.7653 52.1417 74.2236 53.2583 74.7569 54.425C75.3069 55.575 75.8569 56.7667 76.4069 58C76.7403 58 77.1236 58.0167 77.5569 58.05C77.9903 58.1 78.3736 58.125 78.7069 58.125ZM92.1331 46.15C92.3664 44.9 92.2664 43.8667 91.8331 43.05C91.3998 42.2333 90.7831 41.6167 89.9831 41.2C89.5831 41.0167 89.1414 40.8667 88.6581 40.75C88.1914 40.6333 87.7081 40.5667 87.2081 40.55C86.7248 40.5167 86.2414 40.5333 85.7581 40.6C85.2748 40.65 84.8331 40.7583 84.4331 40.925C83.6331 41.2583 82.9498 41.7667 82.3831 42.45C81.8331 43.1333 81.4581 43.8917 81.2581 44.725C81.0581 45.5583 81.0664 46.4167 81.2831 47.3C81.5164 48.1833 82.0164 48.9917 82.7831 49.725C83.0164 49.925 83.2748 50.1 83.5581 50.25C83.8414 50.4 84.1498 50.5083 84.4831 50.575C84.8331 50.6417 85.2081 50.7167 85.6081 50.8C86.0081 50.8667 86.3748 50.975 86.7081 51.125C87.0581 51.275 87.3581 51.475 87.6081 51.725C87.8581 51.9583 88.0081 52.275 88.0581 52.675C88.1581 53.2583 88.0414 53.6917 87.7081 53.975C87.3914 54.2583 87.0081 54.4083 86.5581 54.425C86.1248 54.425 85.7081 54.2917 85.3081 54.025C84.9248 53.7583 84.7164 53.3583 84.6831 52.825C84.1164 52.8417 83.4831 52.8333 82.7831 52.8C82.0831 52.75 81.4414 52.7667 80.8581 52.85V52.925V53C80.8081 53.8 80.9498 54.5167 81.2831 55.15C81.6164 55.7667 82.0664 56.2917 82.6331 56.725C83.1998 57.1583 83.8414 57.5 84.5581 57.75C85.2914 57.9833 86.0248 58.1083 86.7581 58.125C87.2748 58.1417 87.7748 58.1 88.2581 58C88.7581 57.8833 89.2164 57.7083 89.6331 57.475C90.0664 57.2417 90.4498 56.9417 90.7831 56.575C91.1164 56.2083 91.3831 55.7667 91.5831 55.25C91.7831 54.8167 91.9248 54.3667 92.0081 53.9C92.1081 53.4167 92.1414 52.9417 92.1081 52.475C92.0914 52.0083 92.0081 51.5583 91.8581 51.125C91.7081 50.675 91.4831 50.2583 91.1831 49.875C90.6998 49.1583 90.0748 48.5667 89.3081 48.1C88.5581 47.6333 87.7414 47.35 86.8581 47.25C86.5081 47.2 86.1831 47.1083 85.8831 46.975C85.5831 46.8417 85.3664 46.575 85.2331 46.175C85.2164 46.0583 85.1998 45.95 85.1831 45.85C85.1831 45.7333 85.1998 45.6167 85.2331 45.5C85.2998 45.0333 85.5164 44.7167 85.8831 44.55C86.2664 44.3833 86.6581 44.3417 87.0581 44.425C87.4581 44.5083 87.7998 44.7 88.0831 45C88.3664 45.3 88.4581 45.675 88.3581 46.125C88.9414 46.2917 89.5664 46.3667 90.2331 46.35C90.8998 46.3167 91.5248 46.25 92.1081 46.15H92.1331Z"
                clipRule="evenodd"
            ></path>
            <path
                fill="currentColor"
                d="M89.755 46v-6.032h1.568l2.896 3.688v-3.688h1.56V46h-1.56l-2.896-3.688V46h-1.568zM100.9 41.296h-1.888v1.008h1.72v1.328h-1.72V46h-1.568v-6.032h3.456v1.328zM104.523 41.296V46h-1.568v-4.704h-1.288v-1.328h4.144v1.328h-1.288z"
            ></path>
        </svg>
    )
}

export default Logo