# Engine ホームページ

URL: https://ycu-engine.github.io/

# MDX

- Dateの部分はUTCで解釈され、UTCのTZ付きの文字列として返される。なので`Date型`に変換する際は注意が必要

    ```javascript
    // result.date <- 2021-02-08T00:00:00.000Z
    const date = new Date(result.date)

    // date <- Mon Feb 08 2021 09:00:00 GMT+0900 (日本標準時)

    ```
