FactoryBot.define do

    factory :first_user, class: User do
        name {'test_01' }
        email {'test_01@yahoo.co.jp'}
        password {'test_01'}
    end

    factory :second_user, class: User do
        name {'test_02' }
        email {'test_02@yahoo.co.jp'}
        password {'test_02'}
    end
end