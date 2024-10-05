import { calculateStringDistance } from './calculateStringDistance'

describe('DamerauLevenshteinDistance', () => {
  it('should return distance between two strings', () => {
    expect(calculateStringDistance('cat', 'cow')).toBe(2)
  })

  it('should return distance between two strings', () => {
    expect(calculateStringDistance('car', 'cat')).toBe(1)
  })

  it('should return distance between two strings', () => {
    expect(calculateStringDistance('bow', 'ice')).toBe(3)
  })

  it('should return 1 for single transposition', () => {
    expect(calculateStringDistance('card', 'cadr')).toBe(1)
  })

  it('should return distance between two strings', () => {
    expect(calculateStringDistance('hot', 'hot')).toBe(0)
  })

  it('should return 2 for transposition and insertion', () => {
    expect(calculateStringDistance('ca', 'abc')).toBe(2)
  })

  it('should return distance between two strings', () => {
    expect(
      calculateStringDistance(
        'Damerau–Levenshtein distance plays an important role in natural language processing. In natural languages, strings are short and the number of errors (misspellings) rarely exceeds 2. In such circumstances, restricted and real edit distance differ very rarely. Oommen and Loke[8] even mitigated the limitation of the restricted edit distance by introducing generalized transpositions. Nevertheless, one must remember that the restricted edit distance usually does not satisfy the triangle inequality, and thus cannot be used with metric trees.',
        'Since DNA frequently undergoes insertions, deletions, substitutions, and transpositions, and each of these operations occurs on approximately the same timescale, the Damerau–Levenshtein distance is an appropriate metric of the variation between two strands of DNA.[6] More common in DNA, protein, and other bioinformatics related alignment tasks is the use of closely related algorithms such as Needleman–Wunsch algorithm or Smith–Waterman algorithm.[citation needed]'
      )
    ).toBe(405)
  })

  it('should return distance between two strings', () => {
    expect(
      calculateStringDistance(
        `Hedonist Roots
Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”

As Cicero would put it, “Um, not so fast.”

The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.

Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.

In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections 1.10.32–33 of Cicero’s work, with the most notable passage excerpted below:

“Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.”

A 1914 English translation by Harris Rackham reads:

“Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.”

McClintock’s eye for detail certainly helped narrow the whereabouts of lorem ipsum’s origin, however, the “how and when” still remain something of a mystery, with competing theories and timelines.`,
        `Hedonist Roots
Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”

As Cicero would put it, “Um, not so fast.”

The placeholder text, with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.

Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.

In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to  1.10.32–33 of Cicero’s work, with the most notable passage excerpted below:

“Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.”

A 1914 English translation by Harris Rcakham reads:

“Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is , but occasionally circumstances occur in which toil and pain can procure him some great pleasure.”

McClintock’s eye for detail certainly helped narrow the whereabouts of lorem ipsum’s origin, however, the “how and when” still remain something of a mystery, with competing theories and timelines.`
      )
    ).toBe(23)
  })
})
