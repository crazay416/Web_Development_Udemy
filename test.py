def main():
    chess = [[35, 90, 54, 62, 62, 69], [89, 17, 59, 13, 76, 24],
             [73, 1, 57, 11, 60, 34], [52, 94, 21, 67, 9, 77]]

    alien_Chess(chess)


def alien_Chess(chess):
    i = 0
    j = 0
    rows = len(chess)
    columns = len(chess[0])

    while(i < rows):
        while(j < columns):
            current_value = chess[i][j]
            if (i == 0 or i == rows-1) and (j == 0 or j == columns-1):
                print(current_value, "We are on the corner pieces")
            else:
                print(current_value)
            j = j + 1
        i = i + 1
        j = 0

    # while(i < rows):
    #     while(j < columns):
    #         print(chess[i][j], end=" ")
    #         j = j + 1
    #     i = i + 1
    #     j = 0

    # print("rows:", rows)
    # print("columns:", columns)

    # for i in chess:
    #     for j in i:
    #         print(j, end=" ")


main()
