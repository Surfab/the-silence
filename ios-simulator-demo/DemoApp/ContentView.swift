import SwiftUI

struct ContentView: View {
    @State private var count = 0

    var body: some View {
        VStack(spacing: 24) {
            Text("iOS Simulator Demo")
                .font(.title2)
                .bold()

            Text("\(count)")
                .font(.system(size: 64, weight: .bold, design: .rounded))
                .contentTransition(.numericText())
                .animation(.default, value: count)

            HStack(spacing: 16) {
                Button {
                    count -= 1
                } label: {
                    Image(systemName: "minus")
                        .frame(width: 44, height: 44)
                }

                Button {
                    count += 1
                } label: {
                    Image(systemName: "plus")
                        .frame(width: 44, height: 44)
                }
            }
            .font(.title)
            .buttonStyle(.borderedProminent)
        }
        .padding()
    }
}

#Preview {
    ContentView()
}
