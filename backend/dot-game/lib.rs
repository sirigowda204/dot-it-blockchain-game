use ink::prelude::vec::Vec;
use ink::storage::Mapping;

#[ink::contract]
mod dot_game {
    #[ink(storage)]
    pub struct DotGame {
        scores: Mapping<AccountId, u64>,
        high_scores: Vec<(AccountId, u64)>,
    }

    impl DotGame {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self {
                scores: Mapping::default(),
                high_scores: Vec::new(),
            }
        }

        #[ink(message)]
        pub fn submit_score(&mut self, player: AccountId, score: u64) {
            self.scores.insert(&player, &score);
            self.high_scores.push((player, score));
            self.high_scores.sort_by(|a, b| b.1.cmp(&a.1));
            if self.high_scores.len() > 10 {
                self.high_scores.pop();
            }
        }

        #[ink(message)]
        pub fn get_high_scores(&self) -> Vec<(AccountId, u64)> {
            self.high_scores.clone()
        }
    }
}
