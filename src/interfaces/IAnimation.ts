interface IAnimation {
  start( callback?: () => void ): void
  stop(): void
}

export default IAnimation
