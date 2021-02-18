import time

WELCOME_TO_MESSAGE = """
██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗    ████████╗ ██████╗ 
██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝    ╚══██╔══╝██╔═══██╗
██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗         ██║   ██║   ██║
██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝         ██║   ██║   ██║
╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗       ██║   ╚██████╔╝
 ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝       ╚═╝    ╚═════╝ 
"""

i = 0
while i < 5:
    print("\rycu-engine.github.io:~ $ █", end="")
    time.sleep(0.3)
    print("\rycu-engine.github.io:~ $ _", end="")
    time.sleep(0.3)
    i += 1

i = 0

while i < len("launch"):
    print(f"\rycu-engine.github.io:~ $ {'launch'[:i+1]}█", end="")
    time.sleep(0.1)
    print(f"\rycu-engine.github.io:~ $ {'launch'[:i+1]}_", end="")
    time.sleep(0.05)
    i += 1

print("\rycu-engine.github.io:~ $ launch")

