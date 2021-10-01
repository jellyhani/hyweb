const qnaList = [
    {
      q: '나는 직장이나 단체에서',
      a: [
        { answer: '남이 먼저 말하기를 기다린다', type: ['intj', 'intp', 'infj', 'infp', 'istj', 'isfj', 'istp', 'isfp'] },
        { answer: '대화를 주도한다', type: ['entj', 'entp', 'enfj', 'enfp', 'estj', 'esfj', 'estp', 'esfp'] },
    ]
    },
    {
      q: '나는 남들과 연극을 함께 만든다면',
      a: [
        { answer: '주인공이 되고 싶다', type: ['entj', 'entp', 'enfj', 'enfp', 'estj', 'esfj', 'estp', 'esfp'] },
        { answer: '연극을 위해 무대장치나 대본을 다듬는 일을 하고 싶다', type: ['intj', 'intp', 'infj', 'infp', 'istj', 'isfj', 'istp', 'isfp'] },
      ]
    },
    {
      q: '나는 대부분의 경우',
      a: [
        { answer: '활기가 넘치기보다 신중하다', type: ['intj', 'intp', 'infj', 'infp', 'istj', 'isfj', 'istp', 'isfp'] },
        { answer: '신중하기보다 활기에 넘친다', type: ['entj', 'entp', 'enfj', 'enfp', 'estj', 'esfj', 'estp', 'esfp'] },
      ]
    },
    {
      q: '나는 남을 볼 때',
      a: [
        { answer: '그 사람의 유능한 점을 본다" ', type: ['istj', 'isfj', 'estj', 'esfj', 'istp', 'isfp', 'estp', 'esfp'] },
        { answer: '그 사람이 사물을 어떻게 보는가를 본다" ', type: ['intj', 'intp', 'entj', 'entp', 'infj', 'infp', 'enfj', 'enfp'] },
    ]
    },
    {
      q: '내가 좋아하는 것은',
      a: [
        { answer: '현실적인 것보다 독창적인 것', type: ['intj', 'intp', 'entj', 'entp', 'infj', 'infp', 'enfj', 'enfp'] },
        { answer: '독창적인 것보다 현실적인것', type: ['istj', 'isfj', 'estj', 'esfj', 'istp', 'isfp', 'estp', 'esfp']},
      ]
    },
  
    {
      q: '나는 무엇을 결정할 때',
      a: [
        { answer: '사실에 의해 판단한다', type: ['istj', 'isfj', 'estj', 'esfj', 'istp', 'isfp', 'estp', 'esfp'] },
        { answer: '원치겡 근거하여 판단한다', type: ['intj', 'intp', 'entj', 'entp', 'infj', 'infp', 'enfj', 'enfp'] },
        ]
    },
    {
      q: '나는 말을 할 때',
      a: [
        { answer: '낱말의 선택이 중요하다고 생각한다', type: ['intj', 'intp', 'entj', 'entp', 'istj', 'estj', 'istp', 'estp'] },
        { answer: '내 뜻이 전달된다면 낱말은 그다지 중요하지 않다', type: ['infj', 'infp', 'enfj', 'enfp', 'isfj', 'esfj', 'isfp', 'esfp'] },
        ]
    },
    {
      q: '남을 평가하려면',
      a: [
        { answer: '많은 사람의 의견을 종합하는 것이 중요하다', type: ['intj', 'intp', 'entj', 'entp', 'istj', 'estj', 'istp', 'estp'] },
        { answer: '사람 보는 눈을 가진 몇몇 사람의 분석이 중요하다', type: ['infj', 'infp', 'enfj', 'enfp', 'isfj', 'esfj', 'isfp', 'esfp'] },
        ]
    },
    {
      q: '내가 생각하는 나의 첫인상은',
      a: [
        { answer: '차가운 편이다', type: ['intj', 'intp', 'entj', 'entp', 'istj', 'estj', 'istp', 'estp'] },
        { answer: '따듯한 편이다', type: ['infj', 'infp', 'enfj', 'enfp', 'isfj', 'esfj', 'isfp', 'esfp'] },
      ]
    },
    {
      q: '나는 걸음걸이가',
      a: [
        { answer: '느린 편이다', type: ['intp', 'entp', 'infp', 'enfp', 'istp', 'isfp', 'estp', 'esfp'] },
        { answer: '빠른 편이다', type: ['intj', 'entj', 'infj', 'enfj', 'istj', 'isfj', 'estj', 'esfj'] },
        ]
    },
    {
      q: '나는 비교적',
      a: [
        { answer: '착실한 편이다', type: ['intj', 'entj', 'infj', 'enfj', 'istj', 'isfj', 'estj', 'esfj'] },
        { answer: '여유가 있는 편이다', type: ['intp', 'entp', 'infp', 'enfp', 'istp', 'isfp', 'estp', 'esfp'] },
        ]
    },
    {
      q: '나의 생활을 주로',
      a: [
        { answer: '일과표에 따라 움직인다', type: ['intj', 'entj', 'infj', 'enfj', 'istj', 'isfj', 'estj', 'esfj'] },
        { answer: '자유롭게 하다가 미루기도 한다', type: ['intp', 'entp', 'infp', 'enfp', 'istp', 'isfp', 'estp', 'esfp'] },
        ]
    }
  ]
  
  const infoList = [
    {
      name: '당신의 유형은..\nESTJ',
      desc: '#현실 #실용 #규칙 #부지런 #일잘러 \n 화끈하고 솔직하며 직설적인 편이다 \n 혼자서 일하기 싫다 \n 논리적이고 분석적이어서 객관적인 판단을 중시한다 \n 규칙을 중요시 한다 \n 일을 추진함에 있어 게으름이란 없다 \n 주장이 강한 편이다 \n 사람 앞에 나서길 좋아한다 \n 고집이 있지만 논리적으로 자신의 잘못을 느끼면 수긍을 잘 한다 \n 일을 굉장히 잘 하는 편이다'
    },
    {
      name: '당신의 유형은..\nESTP',
      desc: '#활동 #다양 #농담 #센스 #합리화 \n 쾌활한 성격이며, 농담을 즐겨한다 \n 미래, 과거보단 현재에 충실한 편이다 \n 언제나 긍정적인 편이다 \n 눈치가 빠르고 재치와 센스가 넘친다 \n 조직적이며 단편적인 관계를 선호한다 \n 괴로움은 잠시 금세 즐거워진다 \n 자신을 정당화하는 성향이 강하다 \n 한 자리에 머무르는 것은 지루하다 \n 행사에서 진행자를 맡으면 잘할 수 있다고 생각한다'
    },
    {
      name: '당신의 유형은..\nESFJ',
      desc: '#인싸 #추억 #조화 #공감 #걱정 \n 타인과의 관계에서 에너지가 샘솟는다 \n 우정을 소중히 여기는 편이다 \n 갈등을 매우 싫어하고 조화를 우선시한다 \n 청소하다가 추억에 잠기곤 한다 \n 해야 할 것, 하지 말아야 할 것이 명확하게 구분되어 있다 \n 최악의 사태에 대한 걱정과 공포심이 있다 \n 타인과 자신이 공감하기를 원한다 \n 타인에게 대리만족을 많이 느낀다 \n 인정과 칭찬을 정말 좋아한다'
    },
    {
      name: '당신의 유형은..\nESFJ',
      desc: '상대방을 홀리게 만드는 당신! 신비롭고 독특한 매력을 가져, 상대방이 푹 빠지게 만드는 스타일이에요. 직감이 발달되어 손재주가 뛰어난 편이고, 연애할 때 통통 튀는 모습들을 많이 보여준답니다. 유순하고 낙천적인 성향이지만, 자칫잘못하면 상대방에게 천진난만한 아이처럼 보일 수 있는 점을 주의해야 돼요. 또한 감정 기복이 심한 편이라 변덕스러운 마음을 가질 수 있어, 이런 부분들에 신경을 쓴다면 좋은 연애를 할 수 있어요.'
    },
    {
      name: '당신의 유형은..\nESFJ',
      desc: '상대방과의 미래를 꿈꾸는 당신! 현실적인 연애보다는, 미래에 대한 이상적인 연애관을 가지고 있어요. 매일매일 사랑하는 사람과 보낼 미래를 생각하기 때문에, 좋은 신랑감이 될 수 있는 자질이 있답니다. 또한 일적으로나 사랑으로나 야망이 커, 크게 성공할 확률이 높고 리더십이 매우 뛰어나답니다. 다만 높은 이상에 비해서 현실이 자신의 마음에 들지 않으면 허세를 부리거나 사람들을 무시하는 경우가 많으니 이점들을 주의하면 좋을 것 같아요!'
    },
    {
      name: '당신의 유형은..\nESFJ',
      desc: '상대방의 기념일을 챙기며 깜짝 놀라게 하는 당신!, 아이디어가 뛰어나고 남다른 감각이 있어, 상대방에게 많은 이벤트를 해주는 스타일이에요. 연애할 때 눈치도 빠르고, 감동을 줄 수 있어 상대방이 매일 행복하답니다. 전체적으로 화려한 연애를 하지만, 은근히 비밀이 많고 우유부단한 성격을 가지고 있답니다. 또한 귀가 매우 얇아 남의 이야기를 곧이 곧대로 믿어, 상대방을 의심하기도 하기 때문에 조심해야 된답니다!'
    },
    {
      name: '당신의 유형은..\nESFJ',
      desc: '연애할 때, 센스가 넘쳐나는 당신! 말재주가 뛰어나며 처세술이 뛰어나, 상대방의 호감을 금방 얻는답니다. 낙천적이고 유연한 성격을 가지고 있으며, 구속받는 것을 싫어하는 스타일이에요. 소중한 사람들을 위해 희생할 줄도 알지만, 쾌략 지향적인 경우가 많아 사치와 허영에 물드는 경우가 다반수입니다. 한탕 주의에 빠져 쉽게 망가질 수 있기 때문에 이 점을 주의해야 된답니다!'
    },
    {
      name: '당신의 유형은..\nESFJ',
      desc: '연애할 때 모든 걸 맞춰주려고 하는 당신! 다정한 느낌과 상냥한 모습을 가지고 있어, 상대방 입장에서 편안한 느낌을 받을 수 있답니다. 타오르는 연애보다는 안정적인 연애를 추구하고, 상대방에게 마음을 여는 순간 진심으로 사랑에 푹 빠질 수 있습니다. 또한 강인한 생존력과 수완이 좋으나, 한편으로는 자신이 원하는 바를 모두 쟁취하려는 고집이 있어요. 이 고집이 심해지면 다른 사람 눈에서는 계산적인 사람처럼 보여 매력을 잃을 수 있습니다!'
    },
    {
      name: '당신의 유형은..\nESFJ',
      desc: '지치고 힘들 때 언제나 행복을 주는 당신! 정말 끼가 많고 말재주가 많다보니 팔방미인이라는 소리를 많이 듣는 편이랍니다. 또한 다재다능하고 총명하여 어떤 일이든지 잘할 수 있고, 유머 감각도 뛰어나 주변 사람들이 많이 따르는 마당발 타입입니다. 연애할 때 상대방의 기분을 잘 맞춰주고 즐거운 분위기를 유지하나, 다소 본인의 체면을 중시하는 경향이 있어요. 이 점 때문에 잔머리를 굴리다 타인에게 교활하다는 인상을 주게 될 수도 있기 때문에 조금 조심하면 좋을 것 같아요!'
    },
    {
      name: '당신의 유형은..\nESFJ',
      desc: '깔끔한 연애를 추구하며 맺고 끊는 것이 확실한 당신! 단아하고 고고한 이미지를 가지고 있어 우아한 매력을 표출하는 편이랍니다. 집중력과 기억력이 좋아 상대방과 있었던 일들을 다 기억해주는 편이고, 겉으로는 무뚝뚝하나 은근히 감수성이 풍부하답니다. 다만 자신이 생각한 선을 벗어나면 냉소적으로 바뀌고, 평소 직설적인 편이라 차갑다는 인상을 많이 줄 수 있어요. 섬세한 사람이기 때문에 예민한 경우가 많으니 마음을 평안히 다스리고, 상대방에게 좀만 더 따뜻하게 대하면 좋을 것 같아요!'
    },
    {
      name: '당신의 유형은..\nESFJ',
      desc: '애교쟁이 그 자체인 당신! 둥글둥글하게 처세를 잘 하고, 붙임성이 매우 좋아 사교성이 매우 뛰어난 편이랍니다. 또한 궁금한 것을 참지 못해 호기심이 많고, 강아지같이 상대방에게 찰싹 달라붙는 것을 좋아하는 스타일이에요. 성격이 매우 쾌활하나, 감정의 기복이 은근히 심해 상대방이 하는 말에 대해 크게 상처받는 편입니다. 또한 성격이 급한 경우가 많아, 차분하게 행동을 하지 못하는 편이기 때문에 이 점을 좀만 조심하면 좋을 것 같아요! '
    },
    {
      name: '당신의 유형은..\nESFJ',
      desc: '단아하고 고상한 품격을 가진 당신! 마음을 먹을 때 느긋하게 행동하고, 상대방에 대한 배려가 상당히 많아 온화한 성품을 가지고 있어요. 또한 솔직한 성격으로 신뢰를 받을 수 있는 타입이며, 어떠한 일을 하든 책임감이 강해 무사히 마무리한답니다. 현실적인 성향이 강해 실리를 잘 챙기나, 표현력이 다소 부족해 상대방이 사랑받는다는 감정을 못 느낄수도 있어요. 은근히 질투심이 강하고 고지식한 면이 강해, 누가 자기에게 잘못하면 지구 끝까지 복수 할 수 있을 정도이기 때문에 이 점을 조심해야 한답니다! '
    },
    {
        name: '당신의 유형은..\nESFJ',
        desc: '단아하고 고상한 품격을 가진 당신! 마음을 먹을 때 느긋하게 행동하고, 상대방에 대한 배려가 상당히 많아 온화한 성품을 가지고 있어요. 또한 솔직한 성격으로 신뢰를 받을 수 있는 타입이며, 어떠한 일을 하든 책임감이 강해 무사히 마무리한답니다. 현실적인 성향이 강해 실리를 잘 챙기나, 표현력이 다소 부족해 상대방이 사랑받는다는 감정을 못 느낄수도 있어요. 은근히 질투심이 강하고 고지식한 면이 강해, 누가 자기에게 잘못하면 지구 끝까지 복수 할 수 있을 정도이기 때문에 이 점을 조심해야 한답니다! '
      },
      {
        name: '당신의 유형은..\nESFJ',
        desc: '단아하고 고상한 품격을 가진 당신! 마음을 먹을 때 느긋하게 행동하고, 상대방에 대한 배려가 상당히 많아 온화한 성품을 가지고 있어요. 또한 솔직한 성격으로 신뢰를 받을 수 있는 타입이며, 어떠한 일을 하든 책임감이 강해 무사히 마무리한답니다. 현실적인 성향이 강해 실리를 잘 챙기나, 표현력이 다소 부족해 상대방이 사랑받는다는 감정을 못 느낄수도 있어요. 은근히 질투심이 강하고 고지식한 면이 강해, 누가 자기에게 잘못하면 지구 끝까지 복수 할 수 있을 정도이기 때문에 이 점을 조심해야 한답니다! '
      },
      {
        name: '당신의 유형은..\nESFJ',
        desc: '단아하고 고상한 품격을 가진 당신! 마음을 먹을 때 느긋하게 행동하고, 상대방에 대한 배려가 상당히 많아 온화한 성품을 가지고 있어요. 또한 솔직한 성격으로 신뢰를 받을 수 있는 타입이며, 어떠한 일을 하든 책임감이 강해 무사히 마무리한답니다. 현실적인 성향이 강해 실리를 잘 챙기나, 표현력이 다소 부족해 상대방이 사랑받는다는 감정을 못 느낄수도 있어요. 은근히 질투심이 강하고 고지식한 면이 강해, 누가 자기에게 잘못하면 지구 끝까지 복수 할 수 있을 정도이기 때문에 이 점을 조심해야 한답니다! '
      },
      {
        name: '당신의 유형은..\nESFJ',
        desc: '단아하고 고상한 품격을 가진 당신! 마음을 먹을 때 느긋하게 행동하고, 상대방에 대한 배려가 상당히 많아 온화한 성품을 가지고 있어요. 또한 솔직한 성격으로 신뢰를 받을 수 있는 타입이며, 어떠한 일을 하든 책임감이 강해 무사히 마무리한답니다. 현실적인 성향이 강해 실리를 잘 챙기나, 표현력이 다소 부족해 상대방이 사랑받는다는 감정을 못 느낄수도 있어요. 은근히 질투심이 강하고 고지식한 면이 강해, 누가 자기에게 잘못하면 지구 끝까지 복수 할 수 있을 정도이기 때문에 이 점을 조심해야 한답니다! '
      },
      {
        name: '당신의 유형은..\nESFJ',
        desc: '단아하고 고상한 품격을 가진 당신! 마음을 먹을 때 느긋하게 행동하고, 상대방에 대한 배려가 상당히 많아 온화한 성품을 가지고 있어요. 또한 솔직한 성격으로 신뢰를 받을 수 있는 타입이며, 어떠한 일을 하든 책임감이 강해 무사히 마무리한답니다. 현실적인 성향이 강해 실리를 잘 챙기나, 표현력이 다소 부족해 상대방이 사랑받는다는 감정을 못 느낄수도 있어요. 은근히 질투심이 강하고 고지식한 면이 강해, 누가 자기에게 잘못하면 지구 끝까지 복수 할 수 있을 정도이기 때문에 이 점을 조심해야 한답니다! '
      },
  ]