FactoryBot.define do
    factory :idea do
        title { 'test_01' }
        content { 'testtest_01' }
        created_at { Time.current + 1.day }
        category_ids { "1" }
        tag_list { '鬼滅の刃' }
        user { User.first || association(:user) }
    end
    
    factory :second_idea, class: Idea do
        title { 'test_02' }
        content { 'testtest_02' }
        created_at { Time.current + 2.day }
        category_ids { "2" }
        tag_list { 'ラブライブ' }
        user { User.second }
    end

    factory :third_idea, class: Idea do
        title { 'test_03' }
        content { 'testtest_03' }
        created_at { Time.current + 3.day }
        category_ids { "3" }
        tag_list { '進撃の巨人' }
        user { User.first }
    end
end