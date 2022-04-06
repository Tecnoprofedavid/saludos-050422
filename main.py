def on_button_pressed_a():
    for index in range(120):
        basic.show_number(input.running_time() / 1000)
        basic.pause(5000)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_tilt_right():
    global piedra
    piedra = randint(1, 3)
    if piedra == 1:
        basic.show_icon(IconNames.SMALL_SQUARE)
    else:
        if piedra == 2:
            basic.show_icon(IconNames.SQUARE)
        else:
            basic.show_icon(IconNames.SCISSORS)
    basic.pause(1000)
    basic.clear_screen()
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_gesture_shake():
    global dados
    dados = randint(1, 20)
    basic.show_number(dados)
    basic.pause(1000)
    basic.clear_screen()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_gesture_tilt_left():
    basic.show_icon(IconNames.HAPPY)
    basic.pause(1000)
    basic.show_icon(IconNames.HEART)
    basic.clear_screen()
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_button_pressed_ab():
    basic.show_number(input.compass_heading())
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_number(input.temperature())
    basic.pause(1000)
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

dados = 0
piedra = 0
basic.show_icon(IconNames.SMALL_DIAMOND)
basic.pause(500)
basic.show_icon(IconNames.DIAMOND)
basic.pause(500)
basic.show_icon(IconNames.CHESSBOARD)
basic.pause(500)
basic.show_icon(IconNames.SQUARE)
basic.pause(500)
basic.show_icon(IconNames.SMALL_SQUARE)
basic.pause(500)
basic.clear_screen()