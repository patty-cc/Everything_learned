require('minitest/autorun')
require_relative('./bank_account')

class TestBankAccount < MiniTest::Test

  def test_account_name
    account = BankAccount.new( "Craig", 500, "personal" )
    account.holder_name = "Harrison"
    assert_equal( "Harrison", account.holder_name() )
  end

  def test_account_amount
    account = BankAccount.new( "Craig", 500, "personal" )
    account.amount = 1000
    assert_equal( 1000, account.amount() )
  end

  def test_account_type
    account = BankAccount.new( "Craig", 500, "personal" )
    account.type = "business"
    assert_equal( "business", account.type() )
  end


  def test_new_account_name
    new_account = BankAccount.new( "Iain", 1_000_000, "private")
    assert_equal( "Iain", new_account.holder_name)
    assert_equal( "private", new_account.type() )
  end


end
